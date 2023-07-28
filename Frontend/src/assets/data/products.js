import productImg01 from "../images/oven1.jpg";
import productImg02 from "../images/oven2.jpg";
import productImg03 from "../images/oven3.jpg";
import productImg26 from "../images/oven8.jpg";
import productImg04 from "../images/oven4.png";
import productImg05 from "../images/oven5.jpg";
import productImg06 from "../images/oven6.jpg";
import productImg007 from "../images/oven7.jpg";

import productImg07 from "../images/hm1.jpg";
import productImg08 from "../images/hm2.jpg";
import productImg09 from "../images/hm3.jpg";
import productImg10 from "../images/hm4.jpg";

import productImg13 from "../images/wp.jpg";
import productImg14 from "../images/wp2.jpg";
import productImg15 from "../images/wp3.jpg";
import productImg16 from "../images/wp4.jpg";
import productImg17 from "../images/wp5.jpg";
import productImg18 from "../images/wp6.jpg";

import productImg19 from "../images/dw1.jpg";
import productImg20 from "../images/dw2.jpg";
import productImg21 from "../images/dw3.jpg";
import productImg22 from "../images/dw4.jpg";

import productImg23 from "../images/k1.jpg";

import productImg25 from "../images/k2.jpg";

const products = [
  {
    id: "01",
    productName: "LG 32L Microwave Oven ",
    imgUrl: productImg01,
    category: "oven",
    price: 14500,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.7,
        text: "worth for money",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Samsung Microwave Oven",
    imgUrl: productImg02,
    category: "oven",
    price: 16000,
    shortDesc:
      "Samsung 32 L Convection Microwave Oven (MC32A7035CT/TL, Neo stainless silver, SlimFry)",
    description:
      "Capacity 32 L: Suitable for large familiesConvection Microwave Oven: Can be used for baking along with grilling, reheating, defrosting and cookingSpecial Features: Slim Fry Technology- Combines a grill with warm air circulation, so food is cooked crispy inside and out using only a touch of oil | Tandoor Technology- Perfect & Crispy Roti or Naan with just a single touch | Curd Any Time- Enjoy homemade dough or curd anytime of the day | Wide Grill- Enhances grilling and browning effects compared to convectional grill heaters | Ceramic Enamel Cavity- Easy to keep clean and scratch-freeKey Features: Child Safety Lock | Auto Programs - Choose from a wide variety of pre-programmed local recipes | Interior light | Eco Mode- Auto energy saving function | Glass Turntable | Power Defrost | Keep Warm- keeps everything at the proper temperature without over-cooking | 6 Power Levels- Adjust amount of energy dissipated and thus the time required to cook or reheat your food, according to its type and quantity | Convection Temperature (40 - 200 °C) | Preheat Plus1 year standard warranty on Product, 10 years warranty on ceramic enamel cavity Included in the Box: 1 Unit Convection Microwave Oven, 1 Unit Glass Turntable, 1 Unit Wire Rack, 1 Unit Crusty Plate, 1 Quick Guide Label",
    reviews: [
      {
        rating: 4.8,
        text: "worth for money",
      },
      {
        rating: 4.8,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Philips Microwave Oven ",
    imgUrl: productImg03,
    category: "oven",
    price: 14299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "worth for money",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Panasonic Microwave Oven",
    imgUrl: productImg04,
    category: "oven",
    price: 11950,
    shortDesc:
      "Panasonic 27L Convection Microwave Oven(NN-CT645BFDG,,Black Mirror, 360° Heat Wrap, Magic Grill)",
    description:
      "27L Capacity: Suitable for families with 3 to 4 members ;Power + Innovation 900 Watts of High Power for Fast, Even Cooking and Delicious Results 360 Degree Heat Wrap: Advanced Heat Wave Ducts ensure even 360 degree distribution of heat for uniform, faster cookingAlso included in the box: High/Low Rack, Glass Tray, User Manual, Warranty Card. 1 year Warranty on Product and total 5 years on magnetron",
    reviews: [
      {
        rating: 4.8,
        text: "worth for money",
      },
      {
        rating: 4.8,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "Haier Microwave Oven",
    imgUrl: productImg26,
    category: "oven",
    price: 9490,
    shortDesc:
      "Haier 22L Convection Microwave (HIL22ECCFSD, Black, Floral Pattern)",
    description:
      "195 Auto cook menus Oil Free Cooking 11 Multi Power Level Combination Cooking Deodorizer",
    reviews: [
      {
        rating: 4.6,
        text: "worth for money",
      },
      {
        rating: 4.9,
        text: "very helpfull.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Prestige Microwave Oven",
    imgUrl: productImg05,
    category: "oven",
    price: 10700,
    shortDesc:
      "Prestige POTG 46 Ltr - With Rotisserie and Convection",
    description:
      "High Effieciency SS heaters Robust stay cool handle Full Size Glass Door,Baking Tray and Steel Wire Rack",
    reviews: [
      {
        rating: 4.6,
        text: "Not bad",
      },
      {
        rating: 4.9,
        text: "Good worth for money",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "07",
    productName: "SlimFry microwave oven",
    imgUrl: productImg06,
    category: "oven",
    price: 12800,
    shortDesc:
      "21L SlimFry™, Convection Microwave Oven, CE77JD-QB1",
    description:
      "Enjoy healthier fried food without a deep fryer. SLIM FRY™ technology combines a grill with warm air circulation, so food is cooked crispy inside and out using only a touch of oil. And no greasy pans or splatters!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "IFB microwave oven",
    imgUrl: productImg007,
    category: "oven",
    price: 15998,
    shortDesc:
      "IFB 30 L Convection Microwave Oven (30FRC2, Floral Pattern & Black, With Starter Kit)",
    description:
      "30L Capacity: Suitable for Large Families Convection: Can be used for baking along with grilling, reheating, defrosting and cooking IFB offer a super warranty 1 year on Microwave Oven & 3 years on magnetron & cavity IFB Provides starter kit with this product Control: Touch key pad (membrane) is sensitive to touch and easy to clean No. of Programes: Multi Stage Cooking, Grill Mode, Rotisserie, Quick Start, Auto Defrost, Delay Start, Yoghurt, Fermentation Child Safety Lock: Ensures complete safety especially for homes with young children Special features: 101 Auto Cook Menus, Steam Clean, Disinfect, Deodorize, Timer option, Digital Clock, Power Save, Keep Warm, Overheating Protection, Sensor Malfunction Protection Included in the Box : Microwave Oven, Unit Glass Turntable, Wire Rack, Quick Guide Label, Warranty Card",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Topline Hand mixer",
    imgUrl: productImg07,
    category: "HandMixer",
    price: 699,
    shortDesc:
      "T TOPLINE 180 W Hand Blender Hand Mixer And Egg Beater For Cake Making and Whipping Cream with 7 Speed with with spatula and oil brush",
    description:
      "Premium stainless steel finish 7 speed and turbo setting for multiple applications. High Speeds: Combine ingredients at speed one for slowly stirring in chunky ingredients, speed four for mashing potatoes, speed seven for beating egg whites and whipping meringue Snap-on storage case and soft scrape beaters, whisk and dough hooks. Keeps everything in one place. Stainless steel attachments are dishwasher-safe. Easy Start Feature brings the beaters up to the selected speed gradually to help prevent ingredients from splattering. Bowl rest take a pause to read the recipe or add the next ingredient without wondering where to set the mixer. A built in groove lets you rest the mixer over the bowl, so drips go where they belong and not all over your counter-top",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },


  {
    id: "10",
    productName: "Philips Hand Mixer",
    imgUrl: productImg08,
    category: "HandMixer",
    price: 1499,
    shortDesc:
      "Philips Daily Hand Mixer 300W 5 Speed Black - HR3705/10",
    description:
      "Release the beaters or dough hooks with one touch of the large, clear eject button. Smooth surfaces and dishwasher-safe accessories make for fast, easy cleaning. Non-slip grip for easy handling Cone-shaped beaters work up to 20% faster* — covering a larger surface area in less time and incorporating air into the batter for a smooth, fluffy texture. Lightweight, ergonomic design makes mixing comfortable and easy. Beaters and dough hooks attach easily with a click you can hear so you know you've done it right.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "11",
    productName: "Maharash Hand Mixer",
    imgUrl: productImg09,
    category: "HandMixer",
    price: 900,
    shortDesc:
      "Maharsh Hand Blender |Food Blender, Egg Beater Hand Blenders Hand Mixer | Beater - Easy Mix, Powerful 260 Watt Motor | 7 Speed Control + Turbo | Dough Hooks and Strip Beater attachments | Multicolor",
    description:
      "Great machine to blend egg, dressing, cappuccino and so on, front and rear cooling system to prolong machine life. Plus added control with 7 dedicated speeds setting. Whip up lip-smacking mixes for cakes and pastries in a jiffy. Rotis and bread with perfect texture and consistency comfortably. Package included: 1 electric egg beater",
    reviews: [
      {
        rating: 4.6,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "13",
    productName: "LG Water Purifier",
    imgUrl: productImg13,
    category: "waterPurifier",
    price: 23999,
    shortDesc:
      "LG 8 litres RO+UV Water Purifier, WW175EPW with Stainless Steel Tank , and Enhanced Water Recovery",
    description:
      "The LG water purifier's Dual Protection Stainless Steel Water Tank, maintain freshness of water and reduce the growth of bacteria and algae. Far more hygienic than a conventional plastic tank, it ensures that water remains safe for drinking with Dual Protection Seal.LG's Stainless Steel water storage tanks have 94.4% less E.Coli growth in 24hrs as compared to plastic tanks. Thus, stainless steel storage tank in LG True water purifier is safer than regular plastic tank in other water purifier.RO removes virus and bacteria; so there is no need of UV in the filtration stage. UV Cycle in LG True Water Purifiers runs during the Preservation stage. While the filtered water stored in Dual Protection Stainless Steel Tank is absolutely safe and clean to drink, The UV Cycle that automatically starts every 6 Hours.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "12",
    productName: "Borosil Hand Mixer",
    imgUrl: productImg10,
    category: "HandMixer",
    price: 1700,
    shortDesc:
      "Borosil Smartmix Hand Mixer WB21",
    description:
      "The Borosil Smartmix WB21 Hand Blender is for those who really love their cooking. It comes with chrome finished dough hook and a beater attachments - the dough hook can be used for kneading all sorts of doughs, attas and batters, while the beater attachment can be used for regular whisking and blending. There is a container for these accessories so that you will never have to go hunting in drawers to find them! The Smartmix Hand Blender comes with 4 variable speed options and turbo button, so you can adjust your speed based on your needs. The powerful 300W motor ensures that you will never need to look elsewhere for anything that needs to be blended, kneaded or whisked again!",
    reviews: [
      {
        rating: 4.6,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "14",
    productName: "Kent Water Purifier",
    imgUrl: productImg14,
    category: "waterPurifier",
    price: 15500,
    shortDesc:
      "KENT Wonder RO Water Purifier (11033) | RO+UF+TDS Control | Wall Mountable| Transparent Detachable Storage Tank | Patented Mineral RO Technology | 7L Storage | 15 L/hr Output | White",
    description:
      "Multiple purification by RO+UF +TDS Control process which removes even dissolved impurities and such as arsenic, rust, pesticides and fluorides, and kills bacteria and viruses to make water 100% pure and suitable for drinking TDS control system allows adjustment of tds level of purified water which retains essential natural minerals in drinking water Transparent, detachable storage tank for easy onsite cleaning on regular basis 15 litres per hour purification capacity 7 litres storage capacity Pre Filter not included Suitable for purification of brackish, tap water and municipal water supply Warranty: 1 year warranty + 3 years extended service free. Terms and Conditions apply.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Mi Smart Water Purifier",
    imgUrl: productImg18,
    category: "waterPurifier",
    price: 27999,
    shortDesc:
      "Mi Smart Water Purifier",
    description:
      "he water passes through 5 stages of purification to provide quality drinking water.With the RO purification accuracy of 0.0001 micron, it effectively gets rid of chemicals, residual chlorine, visible particulates, bacteria and other compounds that could harm your health.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "AquaGuard Water Purifier",
    imgUrl: productImg16,
    category: "waterPurifier",
    price: 15999,
    shortDesc:
      "Aquaguard Superio 6L UV + UF Water Purifier with Mineral Guard Technology (Black/Metallic Copper)",
    description:
      "When it comes to water there shouldn’t be any compromises about purity and Aquaguard Superio UF + UV Electrical Water Purifier promises that! The body is equipped with food-grade ABS material. The UV + UF technology ensures safety from disease-causing microorganisms and also removes salts and microbes in multiple stages. With the Aquaguard Superio UF + UV Electrical Water Purifier’s price, you certainly won’t be burning a hole in your pocket.  It efficiently removes impurities and makes the water suitable for consumption. Its compact design makes it convenient to install on the countertop or wall. So, what are you waiting for? Order the Aquaguard Superio UF + UV Electrical Water Purifier online, now!",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "AquaGuard Water Purifier",
    imgUrl: productImg17,
    category: "waterPurifier",
    price: 17999,
    shortDesc:
      "Aquaguard Ritz RO+UV+MTDS+SS Water Purifier",
    description:
      "Stylish water purifier with RO+UV technology which stores purified water in a 304 grade stainless steel tank. It can purify water from multiple sources.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Pureit Water Purifier",
    imgUrl: productImg15,
    category: "waterPurifier",
    price: 19899,
    shortDesc:
      "Pureit Copper UV Plus Water Purifier with Copper Enrich Technology",
    description:
      "New Pureit Copper UV Plus water purifier is an advanced UV water purifier that not only provides your family pure and safe drinking water but also enriches water with the goodness of copper with Copper Enrich Technology.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Bosch Dishwasher",
    imgUrl: productImg19,
    category: "dishwasher",
    price: 45800,
    shortDesc:
      "BOSCH Series 6 13 Place Settings Free Standing Dishwasher with Glass Protection Technology (No Pre-rinse Required, Silver Inox)",
    description:
      "No more procrastinating when it comes to washing dishes because of the utilitarian Bosch Serie 6 13 Place Setting Dishwasher as it eases a lot of your work pressure while also saving you a lot of time. The dishwasher boasts of enhanced control options to ensure you get the perfect results for all your dishes. The dishwasher comes to preactivated VarioSpeed which greatly reduces wash cycle time without compromising on wash results thus dishing out the quality in a compact amount of time.Efficient Performance Kitchen work can get really tiresome sometimes which could lead to a dip in efficiency levels. The Bosch Serie 6 13 Place Setting Dishwasher comes with brilliant technology which ensures you get amazing washing results at all times. The Preactivated VarioSpeed reduces wash cycle time without compromising on wash results, whereas express sparkle gets your dishes and cutlery clean and dry in under an hour. Furthermore the intensive Kadhai 70 degree special programme for heavily soiled Kadhais, Pots and Pans with intensive washing and drying cycles offers optimal cleaning and drying results.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "LG Dishwasher",
    imgUrl: productImg20,
    category: "dishwasher",
    price: 49999,
    shortDesc:
      "LG 14 Place Settings Wi-Fi Dishwasher in Silver Color",
    description:
      "LG's Inverter Direct Drive Motor was designed with quiet in mind. With fewer moving parts, you get reliable performance from one of the quietest dishwashers in its class.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Godrej Dishwasher",
    imgUrl: productImg21,
    category: "dishwasher",
    price: 19999,
    shortDesc:
      "Godrej Eon Dishwasher | 8 Place Setting Counter-Top | Compact with an In-built heater (DWT EON MGNS 8C NF SKSL, Silky Silver) | Perfect for Indian kitchens and smaller families",
    description:
      "8 Place Setting: Ideal for a family size of 1-3 members. One place setting consists of a large dinner plate, a small snack plate, a saucer, a bowl, a coffee cup, a drinking glass, a knife, two teaspoons, a dinner fork and a small salad fork. This is also made to accommodate Indian cooking utensils like cookers, kadhais, pots, pans and patilas.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "22",
    productName: "Faber Dishwasher",
    imgUrl: productImg22,
    category: "dishwasher",
    price:25000,
    shortDesc:
      "Faber 12 Place Settings Free Standing Dishwasher (FFSD 6PR 12S Neo, Neo Inox)",
    description:
      "12 Place setting: Suitable for families with up to 6 members. One place setting consists of a dinner plate, desert plate, single glass, soup bowl, tea cup with saucer, knife, spoons and fork",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "23",
    productName: "Milton Kettle",
    imgUrl: productImg23,
    category: "kettle",
    price: 749,
    shortDesc:
      "Milton Go Electro 1.2 Stainless Steel Electric Kettle, 1 Piece, 1200 ml, Silver | Power Indicator | 1500 Watts | Auto Cut-off | Detachable 360 Degree Connector | Boiler for Water",
    description:
      "Material: Stainless Steel, Color: Silver, Package Contents: 1 - Piece Go Electro Electric Kettle (1.2 Litres); For any queries kindly reach customer care number as mentioned on the product packaging along with the proof of purchase. Sturdy handle lets you touch it immediately after it stops functioning without having to worry about burning your hands. Wide mouth for easy cleaning, Hinded Lid for convenience. Supply: 230 Votls AC, 50 Hz., Power: 1500 Watts.",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "24",
    productName: "Prestige Kettle",
    imgUrl: productImg25,
    category: "kettle",
    price: 199,
    shortDesc:
      "Prestige PKOSS 1.5 Stainless Steel Electric Kettle 1500W (Silver and Black, 1.5L)",
    description:
      "Max 3 differentiators Great Features - i)Automatic Cutoff ii) 360 Degree Swivel Base iii)Single Touch lid locking Voltage: 230V; Wattage: 1500W. Heating Element:Yes Warranty: 1 Year, BSNL/MTNL i) Power - 1500 watts ii) Capacity - 1.5L iii) Material- Stainless Steel iv) Concealed Element Troubleshooting guidelines: i)Never operate the appliance empty ii) Never lift the kettle from the base when the unit is in operation. The large opening in the top allows easy access to the smooth, seamless Stainless Steel interior for easy cleaning of mineral deposits Features : Power indicator light that lights up as it begins to boil water and automatic shut-off after boiling ; Its water level indicator enables you to easily measure the amount of water you need  Includes: Main Unit, User Manual, Warranty Card. Content: Prestige Electric Kettle-Pkoss1.5(1.5L with Concealed Element and Detachable Power Base)  Product Dimensions: 19 cm* 18.5 cm * 21 cm. Weight: 0.75kg",
    reviews: [
      {
        rating: 4.8,
        text: "Good",
      },
      {
        rating: 4.9,
        text: "Good",
      },
    ],
    avgRating: 4.8,
  },
];

export default products;
