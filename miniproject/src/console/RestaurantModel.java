package console;

import java.sql.*;
import java.sql.Date;
import java.util.*;


public class RestaurantModel {
    private List<Table> tables;
    private List<MenuItem> menuItems;
    private List<Order> orders;
    private Connection connection;

    private static final String url = "jdbc:mysql://localhost:3306/restaurant_db";
    private static final String user = "root";
    private static final String pass = "Dee#00123";

    public RestaurantModel() {
        tables = new ArrayList<>();
        menuItems = new ArrayList<>();
        orders = new ArrayList<>(); 
        connection = null;
    }

    public void connectToDatabase() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, user, pass);
            System.out.println("Connected to the database successfully!");
        } catch (ClassNotFoundException | SQLException e) {
            System.err.println("Error connecting to the database: " + e.getMessage());
        }
    }

    public void closeDatabaseConnection() {
        try {
            if (connection != null) {
                connection.close();
                System.out.println("Database connection closed.");
            }
        } catch (SQLException e) {
            System.err.println("Error closing the database connection: " + e.getMessage());
        }
    }

    public void addMenuItem(MenuItem menuItem) {
        try {
            String sql = "INSERT INTO menu_items (item_name, price) VALUES (?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, menuItem.getItemName());
            preparedStatement.setDouble(2, menuItem.getPrice());
            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
                if (generatedKeys.next()) {
                    int itemId = generatedKeys.getInt(1);
                    menuItem.setItemId(itemId);
                    menuItems.add(menuItem);
                    System.out.println("Menu item added: " + menuItem);
                }
            } else {
                System.out.println("Failed to add the menu item.");
            }
            preparedStatement.close();
        } catch (SQLException e) {
            System.err.println("Error adding menu item: " + e.getMessage());
        }
    }

    public void updateMenuItem(MenuItem menuItem) {
        try {
            String sql = "UPDATE menu_items SET item_name = ?, price = ? WHERE item_id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, menuItem.getItemName());
            preparedStatement.setDouble(2, menuItem.getPrice());
            preparedStatement.setInt(3, menuItem.getItemId());
            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Menu item updated: " + menuItem);
            } else {
                System.out.println("Menu item with ID " + menuItem.getItemId() + " not found. No update performed.");
            }
            preparedStatement.close();
        } catch (SQLException e) {
            System.err.println("Error updating menu item: " + e.getMessage());
        }
    }


    public void deleteMenuItem(MenuItem menuItem) {
        try {
           
            String sql = "DELETE FROM menu_items WHERE item_id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);

           
            preparedStatement.setInt(1, menuItem.getItemId());

       
            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
             
                menuItems.remove(menuItem);
                System.out.println("Menu item deleted: " + menuItem);
            } else {
                System.out.println("Menu item with ID " + menuItem.getItemId() + " not found. No deletion performed.");
            }


            preparedStatement.close();
        } catch (SQLException e) {
            System.err.println("Error deleting menu item: " + e.getMessage());
        }
    }

    public List<Table> getTables() {
        List<Table> tables = new ArrayList<>();

        try {
   
            String sql = "SELECT table_id, capacity, is_reserved FROM tables";
            Statement statement = connection.createStatement();

           
            ResultSet resultSet = statement.executeQuery(sql);

           
            while (resultSet.next()) {
                int tableId = resultSet.getInt("table_id");
                int capacity = resultSet.getInt("capacity");
                boolean isReserved = resultSet.getBoolean("is_reserved");
                Table table = new Table(tableId, capacity, isReserved);
                tables.add(table);
            }

          
            resultSet.close();
            statement.close();
        } catch (SQLException e) {
            System.err.println("Error fetching tables: " + e.getMessage());
        }

        return tables;
    }

    public List<MenuItem> getMenuItems() {
        List<MenuItem> menuItems = new ArrayList<>();

        try {
            
            String sql = "SELECT item_id, item_name, price FROM menu_items";
            Statement statement = connection.createStatement();

          
            ResultSet resultSet = statement.executeQuery(sql);

            
            while (resultSet.next()) {
                int itemId = resultSet.getInt("item_id");
                String itemName = resultSet.getString("item_name");
                double price = resultSet.getDouble("price");
                MenuItem menuItem = new MenuItem(itemId, itemName, price);
                menuItems.add(menuItem);
            }

           
            resultSet.close();
            statement.close();
        } catch (SQLException e) {
            System.err.println("Error fetching menu items: " + e.getMessage());
        }

        return menuItems;
    }

    public MenuItem findMenuItemById(int itemId) {
        for (MenuItem menuItem : menuItems) {
            if (menuItem.getItemId() == itemId) {
                return menuItem;
            }
        }
        return null; 
    }

    public int placeOrder(Table table, List<MenuItem> items) {
        int orderId = -1;

        try {
          
            String sql = "INSERT INTO orders (table_id, order_date) VALUES (?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

           
            preparedStatement.setInt(1, table.getTableId());

            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
    
                ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
                if (generatedKeys.next()) {
                    orderId = generatedKeys.getInt(1);

                    sql = "INSERT INTO order_items (order_id, item_id) VALUES (?, ?)";
                    preparedStatement = connection.prepareStatement(sql);

                    for (MenuItem item : items) {
                        preparedStatement.setInt(1, orderId);
                        preparedStatement.setInt(2, item.getItemId());
                        preparedStatement.addBatch();
                    }

                    preparedStatement.executeBatch();
                }
            } else {
                System.out.println("Failed to place the order.");
            }
 
            preparedStatement.close();
        } catch (SQLException e) {
            System.err.println("");
        }

        return orderId;
    }

    public void updateTableReservationStatus(Table selectedTable) {
        try {
         
            String sql = "UPDATE tables SET is_reserved = ? WHERE table_id = ?";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);

            preparedStatement.setBoolean(1, selectedTable.isReserved());
            preparedStatement.setInt(2, selectedTable.getTableId());

            int rowsAffected = preparedStatement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Table reservation status updated for Table " + selectedTable.getTableId());
            } else {
                System.out.println("Table with ID " + selectedTable.getTableId() + " not found. No update performed.");
            }

            preparedStatement.close();
        } catch (SQLException e) {
            System.err.println("Error updating table reservation status: " + e.getMessage());
        }
    }
}
class Management extends RestaurantModel {
	public static void main(String[] args) throws ClassNotFoundException {
		RestaurantManagementSystem.main(args);
	}
}

