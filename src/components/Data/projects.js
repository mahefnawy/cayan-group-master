import fx from 'money'
import { map } from 'lodash'

const rawProjects = [
  {
    "id": "101",
    "description": "We present to you our enourmus housing project in Istanbul which is inspired by the incredible Italian city. A startegic location in bahcesehir which is considered one of the most vibrent areas in Istanbul. The location is also very close to the new airport in istanbul and surrounded by many cafes, shops, malls and resturants which will provide for all your needs.",
    "descriptionAr": "نقدم لكم مشروعنا العقاري الضخم  في مدينه اسطنبول المستوحه من مدينه ايطاليه موقع استراتيجي في منطقه بهشه شهير التي تعد من ابرز مراكز الاستثمار والسكن في اسطنبول الحيويه اذ يتمركز المشروع في نقطه التقاء اربعة شوارع فضلا عن قرب المنطقه من مطار اسطنبول الثالث يحاط الموقع بالعديد من المطاعم والبنوك والمقاهي والمحلات التجاريه ضمن المجمع التي تلبي متطلباتك.",
    "descriptionShort": "We present to you our enourmus housing project in Istanbul which is inspired by the incredible Italian city.",
    "descriptionShortAr": "نقدم لكم مشروعنا العقاري الضخم  في مدينه اسطنبول المستوحه من مدينه ايطاليه موقع استراتيجي في منطقه بهشه شهير",
    "typesAll": "1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 68500
    },
    "priceMax": {
      "USD": 165000
    },
    "area": "66m - 167m",
    "name": "Strada",
    "location": "Bahçeşehir, Istanbul",
    "locationAr": " بهشة شهير، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "24",
    "deliveryDate": "2018,2019",
    "deliveryDateAr": "2018,2019",
    "downPayment": "25",
    "lat": 41.016431,
    "lng": 28.653232,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 68500
        },
        "maxPrice": {
          "USD": 88000
        },
        "minArea": "66",
        "maxArea": "82",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 93000
        },
        "maxPrice": {
          "USD": 148000
        },
        "minArea": "106",
        "maxArea": "152",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 125000
        },
        "maxPrice": {
          "USD": 165000
        },
        "minArea": "138",
        "maxArea": "167",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 175000
        },
        "maxPrice": {
          "USD": 240000
        },
        "minArea": "225",
        "maxArea": "250",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152807/projects/cayan-101/3_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522246816/projects/cayan-101/13.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187289/projects/cayan-101/interior/3_-_Copy.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187289/projects/cayan-101/interior/5_-_Copy.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187286/projects/cayan-101/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187285/projects/cayan-101/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187285/projects/cayan-101/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187285/projects/cayan-101/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187208/projects/cayan-101/interior/onay-life-residence_74260.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187208/projects/cayan-101/interior/onay-life-residence_74256.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187208/projects/cayan-101/interior/onay-life-residence_74254.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525187204/projects/cayan-101/interior/onaylife-39.jpg"
    ]
  },
  {
    "id": "107",
    "description": "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece. This amazing project is located directly by the sea. Few steps and you will be on the shore, with an incredible moder architecture. This project has one of the best views Istanbul has to offer. The location of this project has made it one of the best in Istanbul. A combination between peace of mind, incredible view and modern architecture",
    "descriptionAr": "نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة، بما أنك بموقع يُمكنك من لمس البحر بمجرد مد يدك، فقد دفع المصممين لعمل تصميم معماري يليق بذلك الموقع والمفهوم. التحديات التي تفرضها بنية الأرض وتضاريسها الصعبة جعل المصممين يستفيدوا منها من حيث تحويلها الي قيمة إضافية لها وجعلها تنحدر كلما اقتربنا من مستوى سطح البحر كما وفَّرنا مساحات مفتوحة كبيرة قادرة على إثبات إطلالة البحر الخلابة في أكبر نسبةٍ من المشروع. مشروع   Cayan107 سيصبح مركزا حيويا هاما ونقطة التقاء للمنطقة مع منطقة معيشة على جانب البحر. بإختصار، هذا المشروع جمع بين هدوء و سكون الساحل و التصميم المعماري الذي يعكس الروح الحديثة في قلب الطبيعة الهادئة.",
    "descriptionShortAr": "نقدم لكم مشروعنا الجديد الراقي كيان 107 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيوكشكمجة",
    "descriptionShort": "We present to you our new luxurious project which is located in one of istanbul's most active and vibrate location which is büyükçekmece.",
    "typesAll": "1+1, 2+1, 3+1, 4+1, 5+1",
    "priceMin": {
      "USD": 113631
    },
    "priceMax": {
      "USD": 696325
    },
    "area": "69.4m - 343.51m",
    "name": "Marina 24",
    "location": "Buyukçekmece, Istanbul",
    "locationAr": "بيوك شكمجة، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "24",
    "deliveryDate": "2019",
    "deliveryDateAr": "2019",
    "downPayment": "35",
    "lat": 41.019482,
    "lng": 28.551043,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 113631
        },
        "maxPrice": {
          "USD": 211881
        },
        "minArea": "69.4",
        "maxArea": "100.15",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 154031
        },
        "maxPrice": {
          "USD": 424249
        },
        "minArea": "85.94",
        "maxArea": "228.79",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/2_1.jpg"

      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 301004
        },
        "maxPrice": {
          "USD": 496225
        },
        "minArea": "150.5",
        "maxArea": "273.89",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 307995
        },
        "maxPrice": {
          "USD": 709119
        },
        "minArea": "153.85",
        "maxArea": "321.64",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/4_1.jpg"
      },
      {
        "type": "5+1",
        "minPrice": {
          "USD": 659373
        },
        "maxPrice": {
          "USD": 696269
        },
        "minArea": "261.97",
        "maxArea": "343.51",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153799/projects/cayan-107/5_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522247757/projects/cayan-107/13.jpg"

    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525096331/projects/cayan-107/interior/13.jpg"

    ]
  },
  
  {
    "id": "4",
    "description": "This project is built in the beautiful Esenyurt area on the Eurpoean side which is considered one of the most important investment areas in Istanbul. The project is minutes away from Ataturk airport and about 20 minutes away from the new istanbul channal overlookinng the black sea and marmara sea.",
    "descriptionAr": "يتم بناء المشروع في منطقة ت أسنيور ي في الجانب الأوروبي والت تعتبر أبرز مناطق الاستثمار العقاري في مدينة إسطنبول. موقع  استثماري تشهدمنطقة ت أسنيور ب ثورة عقارية بسبب بعدها عن صخ المدينة واكتظاظها وبنفس الوقت قربها من مطار  أتاتوركالدولي دقيقة فقط.ومنأهم ميزات منطقة ت 20حيث تبعد عنه أسنيور أنها ملاصقة لمنطقة القناة الجديدة التي عند انتهائها ستربط البحر الأسود ببحر مرمرة،.",
    "descriptionShort": "This project is built in the beautiful Esenyurt area on the Eurpoean side which is considered one of the most important investment areas in Istanbul.",
    "descriptionShortAr": " يتم بناء المشروع في منطقة ت أسنيور ي في الجانب الأوروبي والت  تعتبر أبرز مناطق الاستثمار العقاري في مدينة إسطنبول. .",
    "typesAll": "1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 68000
    },
    "priceMax": {
      "USD": 255000
    },
    "area": "72m - 261m",
    "name": "Mil Park",
    "location": "Esenyurt, Istanbul",
    "locationAr": " اسينيورت، اسطنبول ",
    "status": "Ready",
    "statusAr": "جاهز",
    "installment": "36",
    "deliveryDate": "Ready",
    "deliveryDateAr": "جاهز",
    "downPayment": "30",
    "lat": 41.016431,
    "lng": 28.653232,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 68000
        },
        "maxPrice": {
          "USD": 93000
        },
        "minArea": "72",
        "maxArea": "84",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 113000
        },
        "maxPrice": {
          "USD": 127000
        },
        "minArea": "105",
        "maxArea": "156",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 175000
        },
        "maxPrice":{
          "USD": 190000
        },
        "minArea": "177",
        "maxArea": "232",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 235000
        },
        "maxPrice": {
          "USD": 255000
        },
        "minArea": "190",
        "maxArea": "261",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152634/projects/cayan-4/9.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098281/projects/cayan-4/interior/11.jpg",
    ]
  },
  {
    "id": "11",
    "description": "This project consists of a variety of units like amazing vilas and apartments, with an incredible architecture modern design. The project is away from the noise of the city with a relaxed and very comfortable atmosphere. It's also located on the meeting point with the sea which will provide an incredible life style with an amazing view of the sea and green areas. There is also a faire (cruise) service right on the shore.",
    "descriptionAr": "صمم المشروع لتتموضع وحداته المكونه من فلل وشقق عادية على شكل افقي واسع مع تصميم  رائع وهذا المشروع الأول والوحيد في مدينة إسطنبول الذي يحتوي على هذه المواصفات. أولا هذا المشروع بعيد عن التلوث البصري والضجيج ويوجد عند نقطة التقاء اسطنبول بالبحر وهو ما سيوفر لك حياة جميله باطلالة زرقاء وخضراء من خلال المناظر البحرية المتوجهةمن الخصوصيات الأولى والوحيده ه التي تجعل المشروع فريدا من نوع هي الميناء الترفيهي (ا المارين ) الواقعة في مشروع الخط الساحليوالصالحه للاستخدام ويوجد رحلات بحريه  كل 20 من المارينا لا كبتاش وا امينونو و اورتا كو",
    "descriptionShort": "The project is located on the shore of marmara sea in beautiful Beylikduzu it is few minutes away from the heyway E5 which is considered one of the most important roads connecting different parts of istanbul.",
    "descriptionShortAr": "وجود المشروع على شاطئ بحر مرمرة في منطقة بيليك دوزو الراقية، وقربه من الطريق السريعE5 الذي يٌعتبر عصب مدينة إسطنبول، جعله من أهم فرصالاستثمار في اسطنبولا.",
    "typesAll": "1+1, 2+1, 3+1, 4+1, 3+1v, 4+1v, 5+1v",
    "priceMin": {
      "USD": 109174
    },
    "priceMax": {
      "USD": 1091002
    },
    "area": "66m - 385m",
    "name": "Deniz Istanbul",
    "location": "Beylikduzu, Istanbul",
    "locationAr": " بيليك دوزو، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "24",
    "deliveryDate": "2018,2020",
    "deliveryDateAr": "2018,2020",
    "downPayment": "25",
    "lat": 40.967412,
    "lng": 28.626802,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 109182
        },
        "maxPrice": {
          "USD": 109182
        },
        "minArea": "66",
        "maxArea": "66",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 165009
        },
        "maxPrice":{
          "USD": 165009
        },
        "minArea": "96",
        "maxArea": "144",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 220094
        },
        "maxPrice": {
          "USD": 220094
        },
        "minArea": "133",
        "maxArea": "179",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 389303
        },
        "maxPrice": {
          "USD": 389303
        },
        "minArea": "213",
        "maxArea": "213",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/4_1.jpg"
      },
      {
        "type": "3+1v",
        "minPrice": {
          "USD": 393255
        },
        "maxPrice": {
          "USD": 393255
        },
        "minArea": "156",
        "maxArea": "179",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/4_1.jpg"
      },
      {
        "type": "4+1v",
        "minPrice": {
          "USD": 529116
        },
        "maxPrice":{
          "USD": 529116
        },
        "minArea": "199",
        "maxArea": "213",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/3_1.jpg"
      },
      {
        "type": "5+1v",
        "minPrice": {
          "USD": 1091087
        },
        "maxPrice": {
          "USD": 1091087
        },
        "minArea": "385",
        "maxArea": "385",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152659/projects/cayan-11/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439403/projects/cayan-11/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522439391/projects/cayan-11/13.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525096471/projects/cayan-11/interior/10.jpg"
    ]
  },

  {
    "id": "100",
    "description": "Basaksehir is one of the newly built neighborhoods in Istanbul which attracts local and foreign investors for it's modern architecture and it's special location. The project is located on the Tep highway which connects the asian and europian sides, also it's located in the middle of the main roads leading to the Bosporus bridge. After the opening of the metro line in 2013 it transformed this area to be one of the most accessible areas in Istanbul.",
    "descriptionAr": "باشاك شهير هو أحد احدث أحياء مدينة إسطنبول.  يُثير باشاك شهير اهتمام المستثمرين المحليين والأجانب بمظهره المعاصر وقربه إلى المشاريع العملاقة والهدوء الذي يتمتع به.كما وقع ضمن أسرع ثلاثة احياء في إرتفاع أسعار العقارات. يقع الحي على طريق التيم السريع الذي يربط تركيا بقارة أوروبا، كما يتمركز وسط الطرق الواصلة لجسر البسفور الثالث. ومع وصول خط المترو إليه في عام 2013 أصبح باشاك شهير من أسهل أحياء إسطنبول من حيث المواصلات. يمتلك الحي العديد من ساحات التجول الطبيعية والصناعية ولعل أبرزها بلا شك وادي سولار يقع وادي سولار في  المرحلة الخامسة من الحي ويعتبر أكثر الساحات الاجتماعية المكشوفة في إسطنبول حداثة والذي يمكنه أن يشعركم بأنفاس الطبيعة المنعشة بساحاته الخضراء.",
    "descriptionShort": "Basaksehir is one of the newly built neighborhoods in Istanbul which attracts local and foreign investors for it's modern architecture and it's special location.",
    "descriptionShortAr": "باشاك شهير هو أحد احدث أحياء مدينة إسطنبول.  يُثير باشاك شهير اهتمام المستثمرين المحليين والأجانب بمظهره المعاصر وقربه إلى المشاريع العملاقة والهدوء الذي يتمتع به.",
    "typesAll": "1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 101525
    },
    "priceMax": {
      "USD": 313715
    },
    "area": "48m - 252m",
    "name": "Istanbul 3",
    "location": "Başakşehir, Istanbul",
    "locationAr": "باشاك شهير، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "50",
    "deliveryDate": "2019",
    "deliveryDateAr": "2019",
    "downPayment": "30",
    "lat": 41.016431,
    "lng": 28.653232,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 101525
        },
        "maxPrice": {
          "USD": 128944
        },
        "minArea": "48",
        "maxArea": "85",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152788/projects/cayan-100/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 137590
        },
        "maxPrice": {
          "USD": 196124
        },
        "minArea": "108",
        "maxArea": "130",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152788/projects/cayan-100/2_1.jpg"
      },
      {

        "type": "3+1",
        "minPrice": {
          "USD": 183527
        },
        "maxPrice": {
          "USD": 241079
        },
        "minArea": "163",
        "maxArea": "163",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152788/projects/cayan-100/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 243302
        },
        "maxPrice": {
          "USD": 313700
        },
        "minArea": "215",
        "maxArea": "252",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152788/projects/cayan-100/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522440042/projects/cayan-100/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522440042/projects/cayan-100/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522440042/projects/cayan-100/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522440042/projects/cayan-100/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522440042/projects/cayan-100/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522440042/projects/cayan-100/6.jpg",
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_001_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_002_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_003_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_004_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_006_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_007_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_008_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_009_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_0010_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_0011_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089427/projects/cayan-100/interior/4_1_0012_cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089552/projects/cayan-100/interior/4_1_B001cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089552/projects/cayan-100/interior/4_1_B002cc.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525089552/projects/cayan-100/interior/4_1_B003cc.jpg",
    ]
  },
  {
    "id": "128",
    "description": "We present to you our new and special project located in Ayoub area. This project has been designed by an award winning architecture firm. It reflects the historical and modern beauty of Istanbul. It overlooks the beautiful Sultan Ayoub mosque, Bosporus bridge and the beautiful goalf. The project is surrounded by cafes, schools, resturants and parks.",
    "descriptionAr": "نقدم لكم مشروعنا الجديد والمميز الذي يقع في منطقة ايوب وتم تصميمه من قبل المكتب المعماري الحائز على جائزة التاغو هذا المشروع يعكس الملمس التاريخي وجماليات اسطنبول يجمع مع العمارةالعثمانية والعمارة الحديثة ويتم وضع وفقا للعرض الذهبي وشبه الجزيرة مناط المعيشة مع شرفات المطله على جامع سلطان ايوب وبحر الخليج وجسر البوسفور ويحيط بالمشروع معدات اجتماعية وتقنية كاملة مع المدرسة والحديقة والمسجد الذي بني في داخل المشروع من البدايةا.",
    "descriptionShort": "We present to you our new and special project located in Ayoub area. This project has been designed by an award winning architecture firm. It reflects the historical and modern beauty of Istanbul. ",
    "descriptionShortAr": "نقدم لكم مشروعنا الجديد والمميز الذي يقع في منطقة ايوب وتم تصميمه من قبل المكتب المعماري الحائز على جائزة التاغو هذا المشروع يعكس الملمس التاريخي وجماليات اسطنبول.",
    "typesAll": "1+0, 1+1, 2+1, 3+1",
    "priceMin": {
      "USD": 72358
    },
    "priceMax": {
      "USD": 268003
    },
    "area": "50m - 201m",
    "name": "HALIC",
    "location": "AYOUB, Istanbul",
    "locationAr": " ايوب، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "36",
    "deliveryDate": "2019",
    "deliveryDateAr": "2019",
    "downPayment": "35",
    "lat": 41.046885,
    "lng": 28.934333,
    "types": [{
        "type": "1+0",
        "minPrice": {
          "USD": 72358
        },
        "maxPrice": {
          "USD": 85217
        },
        "minArea": "50",
        "maxArea": "53",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153913/projects/cayan-128/1_0.jpg"
      },
      {
        "type": "1+1",
        "minPrice": {
          "USD": 98474
        },
        "maxPrice": {
          "USD": 108930
        },
        "minArea": "73",
        "maxArea": "75",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153913/projects/cayan-128/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 138775
        },
        "maxPrice": {
          "USD": 155368
        },
        "minArea": "98",
        "maxArea": "117",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153913/projects/cayan-128/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 207492
        },
        "maxPrice": {
          "USD": 267971
        },
        "minArea": "141",
        "maxArea": "201",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153913/projects/cayan-128/3_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153916/projects/cayan-128/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153913/projects/cayan-128/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153915/projects/cayan-128/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153915/projects/cayan-128/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153913/projects/cayan-128/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153914/projects/cayan-128/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153916/projects/cayan-128/cayan-128.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153915/projects/cayan-128/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153913/projects/cayan-128/3.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097132/projects/cayan-128/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097132/projects/cayan-128/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097132/projects/cayan-128/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097132/projects/cayan-128/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097132/projects/cayan-128/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097132/projects/cayan-128/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097132/projects/cayan-128/interior/7.jpg"
    ]
  },
  {
    "id": "139",
    "description": "The project is being built under the supervision of the turkish government. Located in the special area of Bahcesehir and near to the new airport in istanbul which is the biggest in the world. It is also near to the new istanbul cannal which is being built. The project contains a fitness center, Turkish bath, privet and public swimming pools and 30 shopping centers.",
    "descriptionAr": "يتم انشاء المشروع بضمان الحكومه التركيه ويتميز بموقعه المميز وسط بهشه شهير القريبه من المطار الجديد والاكبر في العالم وقريب من قناه اسطنبول الجديد والتي يتم انشاءها يحتوي المشروع على نادي رياضي وحمام تركي ومسابح معزوله للنساء والرجال ويحنوي على 30 محل تجاري .",
    "descriptionShort": "The project is being built under the supervision of the turkish government. Located in the special area of Bahcesehir and near to the new airport in istanbul which is the biggest in the world.",
    "descriptionShortAr": "يتم انشاء المشروع بضمان الحكومه التركيه ويتميز بموقعه المميز وسط بهشه شهير القريبه من المطار الجديد والاكبر في العالم",
    "typesAll": "1+1, 2+1, 3+1, 4+2",
    "priceMin": {
      "USD": 104965
    },
    "priceMax": {
      "USD": 217834
    },
    "area": "96m - 211m",
    "name": "Isbartakole emlak kont",
    "location": "Bahçeşehir, Istanbul",
    "locationAr": " بهشة شهير، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "120",
    "deliveryDate": "2018",
    "deliveryDateAr": "2018",
    "downPayment": "30",
    "lat": 41.079502,
    "lng": 28.683707,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 104965
        },
        "maxPrice": {
          "USD": 104965
        },
        "minArea": "96",
        "maxArea": "105",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154034/projects/cayan-139/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 137813
        },
        "maxPrice": {
          "USD": 137813
        },
        "minArea": "120",
        "maxArea": "149",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154034/projects/cayan-139/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 154855
        },
        "maxPrice": {
          "USD": 154855
        },
        "minArea": "159",
        "maxArea": "186",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154034/projects/cayan-139/3_1.jpg"
      },
      {
        "type": "4+2",
        "minPrice": {
          "USD": 217834
        },
        "maxPrice": {
          "USD": 217834
        },
        "minArea": "207",
        "maxArea": "211",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154034/projects/cayan-139/4_2.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154034/projects/cayan-139/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154034/projects/cayan-139/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154035/projects/cayan-139/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154034/projects/cayan-139/4.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/11.jpg"
    ]
  },
  {
    "id": "106",
    "description": "We present to you our new project which is located in one of Istanbul's most viberent and alive areas which is Beylikduzu. This project is the first project to adopt different styles of architectures to achieve a modern and practical style. This project contains all the modern, new and smart functionality that you will ever need.",
    "descriptionAr": "نقدم لكم مشروعنا الجديد الراقي كيان 106 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيلك دوزو  حيث تشهد المنطقة نهضة عمرانية واستثمارية لا سابق لها . مشروعنا هو أول مشروع يتبنى نمطًا وتصميمات مختلفة ليحقق هذا التميز عن المشروعات المشابهة. يقدم المشروع جودة مرتفعة وبناء هيكليًا متينًا، وجميع الإمكانات التقنية التي تتطلبها الحياة العصرية. هذه البناية تعكس جوانب الأبهة والفخامة من خلال: مساحة تخزين كبيرة مخصصة لكل شقة،.",
    "descriptionShort": "We present to you our new project which is located in one of Istanbul's most viberent and alive areas which is Beylikduzu.",
    "descriptionShortAr": " نقدم لكم مشروعنا الجديد الراقي كيان 106 الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بيلك دوزو  حيث تشهد المنطقة نهضة عمرانية واستثمارية لا سابق لها .",
    "typesAll": "1+1, 2+1, 3+1",
    "priceMin": {
      "USD": 71800
    },
    "priceMax": {
      "USD": 165960
    },
    "area": "71m - 181m",
    "name": "EMS",
    "location": "beylikdüzü, istanbul",
    "locationAr": " بيليك دوزو، اسطنبول ",
    "status": "Ready",
    "statusAr": "جاهز",
    "installment": "30",
    "deliveryDate": "Ready",
    "deliveryDateAr": "جاهز",
    "downPayment": "50",
    "lat": 41.016431,
    "lng": 28.653232,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 71800
        },
        "maxPrice": {
          "USD": 87368
        },
        "minArea": "71",
        "maxArea": "89",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153767/projects/cayan-106/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 101801
        },
        "maxPrice": {
          "USD": 154613
        },
        "minArea": "113",
        "maxArea": "173",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153767/projects/cayan-106/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 134540
        },
        "maxPrice": {
          "USD": 165960
        },
        "minArea": "157",
        "maxArea": "181",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153767/projects/cayan-106/1_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153767/projects/cayan-106/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153766/projects/cayan-106/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153766/projects/cayan-106/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153767/projects/cayan-106/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153767/projects/cayan-106/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153767/projects/cayan-106/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153767/projects/cayan-106/7.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093480/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093472/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093472/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_17.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093476/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_26.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093482/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_36.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093468/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_40.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_43.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_45.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_46.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_51.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_58.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525093475/projects/cayan-106/interior/EMS_211_Park_-_Sample_Flat_7.jpg"
    ]
  },
  {
    "id": "115",
    "description": "This special project is located in one of Istanbul most viberent and alive areas which is Bahcesehir. The project is directly located on the main highway which connects bahcesehir with the new airport in istanbul. Bahcesehir is one of the most developed areas in Istanbul with a varianty of shopping malls, social activities and markets",
    "descriptionAr": "نقدم لكم مشروعنا الجديد الراقي كيان 115الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بهشه شهير يقع  المشروع مباشرة على الطريق الرئيسيةالتيم الذي يربط بهتشه شهير بالمطار اسطنبول الثالث « األكبربالعالم » منطقة بهتشه شهير أحد أكثر المناطق الآخذة بالتطور في اسطنبول حيث المولات والنشاطات الاجتماعية والتجار .ستشعر بسحر الأجواء التي لا توصف بلا شك فرصتك يعتبر المثالية لتنتقل بحياتك الى المستوى الذي طالما طمحت للوصول اليها.",
    "descriptionShort": "This special project is located in one of Istanbul most viberent and alive areas which is Bahcesehir.",
    "descriptionShortAr": "نقدم لكم مشروعنا الجديد الراقي كيان 115الذي يقع بأكثر مناطق إسطنبول حيوية وحداثة وهي بهشه شهير .",
    "typesAll": "1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 67703
    },
    "priceMax": {
      "USD": 197428
    },
    "area": "65m - 207.5m",
    "name": "Aurupark hayat",
    "location": "Bahçeşehir, Istanbul",
    "locationAr": " بهشة شهير، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "36",
    "deliveryDate": "2020",
    "deliveryDateAr": "2020",
    "downPayment": "15",
    "lat": 41.068632,
    "lng": 28.666541,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 67703
        },
        "maxPrice": {
          "USD": 89968
        },
        "minArea": "65",
        "maxArea": "104",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153858/projects/cayan-115/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 104056
        },
        "maxPrice": {
          "USD": 171038
        },
        "minArea": "110",
        "maxArea": "208",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153858/projects/cayan-115/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 130255
        },
        "maxPrice": {
          "USD": 196743
        },
        "minArea": "138",
        "maxArea": "212",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153858/projects/cayan-115/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 189822
        },
        "maxPrice": {
          "USD": 197484
        },
        "minArea": "206.5",
        "maxArea": "207.5",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153858/projects/cayan-115/2_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/13.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/14.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/15.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522248177/projects/cayan-115/16.jpg"

    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525096887/projects/cayan-115/interior/13.jpg"

    ]
  },
  {
    "id": "112",
    "description": "This special project is located in one of Istanbul most viberent and alive areas which is Bahcesehir. The project is directly located on the main highway which connects bahcesehir with the new airport in istanbul. Bahcesehir is one of the most developed areas in Istanbul with a varianty of shopping malls, social activities and markets",
    "descriptionAr": "يتميز المشروع بموقعه الحيوي والقيم بمنطقة بهشه شهير التي تعتبر من أرقى مناطق اسطنبول في الطرف الاوروبي                                                                                                                                                                                   مستقبل افضل وحياة راقية في قلب اسطنبول الجديد...فرصتك للاستثمار  باكثر مناطق اسطنبول اهمية بهشه شهيرتشهد منطقة بهشه شهير تطورا عمرانيا سريعا وتكمن اهمية المشروع بموقعه المميز بجانب اكبر حديقه في بهشه شهير  قريب من المطار الجديد 35 دقيقا مشروعنا الجديد هو (بضمان البلدية) وهو عمل متكامل يؤمن حياة مترفة للعائلة المثالية من حيث الخدمات الموجودةا.",
    "descriptionShort": "This special project is located in one of Istanbul most viberent and alive areas which is Bahcesehir.",
    "descriptionShortAr": "يتميز المشروع بموقعه الحيوي والقيم بمنطقة بهشه شهير التي تعتبر من أرقى مناطق اسطنبول في الطرف الاوروبي                                                                                                                                                                                   مستقبل افضل وحياة راقية في قلب اسطنبول الجديد.",
    "typesAll": "1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 60308
    },
    "priceMax": {
      "USD": 198473
    },
    "area": "69m - 233m",
    "name": "Semt",
    "location": "Bahçeşehir, Istanbul",
    "locationAr": " بهشة شهير، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "36",
    "deliveryDate": "2019",
    "deliveryDateAr": "2019",
    "downPayment": "50",
    "lat": 41.016431,
    "lng": 28.653232,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 60308
        },
        "maxPrice": {
          "USD": 86507
        },
        "minArea": "69",
        "maxArea": "96",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153816/projects/cayan-112/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 93922
        },
        "maxPrice": {
          "USD": 176475
        },
        "minArea": "96",
        "maxArea": "224",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153816/projects/cayan-112/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 120122
        },
        "maxPrice": {
          "USD": 191058
        },
        "minArea": "144",
        "maxArea": "224",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153816/projects/cayan-112/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 171285
        },
        "maxPrice": {
          "USD": 198473
        },
        "minArea": "207",
        "maxArea": "233",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153816/projects/cayan-112/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153817/projects/cayan-112/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153817/projects/cayan-112/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153817/projects/cayan-112/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153817/projects/cayan-112/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153817/projects/cayan-112/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153817/projects/cayan-112/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153817/projects/cayan-112/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153817/projects/cayan-112/8.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525096771/projects/cayan-112/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525096771/projects/cayan-112/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525096771/projects/cayan-112/interior/3.jpg"
    ]
  },
  {
    "id": "138",
    "description": "The project is located in sparta kobay which is considered the gateway to bahcesehir which makes this project a huge investment operatunity. This project overlooks the beautiful valley and it's minutes away from a metro statioin which is being built there connecting bahcesehir with mecidiyeköy and with other major areas in Istanbul. This project is guaranteed by the turkish government. It's also surrounded by many shopping malls, entertainment centers and schools. The project also has many cafes, resturants and all services you will ever need.",
    "descriptionAr": "موقع المشروع المميز في منطقه اسبارطه كوله التب تعتبر مدخل منطقه بهشه شهير ومركزا هاما من مراكز الاستثمار اسطنبول يتميز المشروع باطلاله مباشره على الوادي المزمع تجهيزه بفنون الجمال والترفيه يبعد المشروع مسافه دقائق عن محطه منرو مستقبليه تصل منطقه بهشه شهير بمنطقه مجيديه كوي وبمختلف مناطق اسطنبول يتميز المشروع بانه بضمان الدوله يحيط المشروع بالعديد من مراكز التسوق التجاريه والترفيهيه والمدارس اضافه لما يحتوي المجمع من مطاعم وخدمات ترفيهيه تؤمن كافه احتياجات ساكني المجمعا.",
    "descriptionShort": "The project is located in sparta kobay which is considered the gateway to bahcesehir which makes this project a huge investment operatunity.",
    "descriptionShortAr": "موقع المشروع المميز في منطقه اسبارطه كوله التب تعتبر مدخل منطقه بهشه شهير ومركزا هاما من مراكز الاستثمار اسطنبول.",
    "typesAll": "2+1, 3+1, 4+2",
    "priceMin": {
      "USD": 137918
    },
    "priceMax": {
      "USD": 287452
    },
    "area": "128m - 228m",
    "name": "ebruli",
    "location": "Bahçeşehir, Istanbul",
    "locationAr": " بهشة شهير، اسطنبول ",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "84",
    "deliveryDate": "2019",
    "deliveryDateAr": "2019",
    "downPayment": "25",
    "lat": 41.074326,
    "lng": 28.795631,
    "types": [{
        "type": "2+1",
        "minPrice": {
          "USD": 137918
        },
        "maxPrice": {
          "USD": 147804
        },
        "minArea": "128",
        "maxArea": "134",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 176475
        },
        "maxPrice": {
          "USD": 194024
        },
        "minArea": "168",
        "maxArea": "190",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/3_1.jpg"
      },
      {
        "type": "4+2",
        "minPrice": {
          "USD": 263725
        },
        "maxPrice": {
          "USD": 287452
        },
        "minArea": "208",
        "maxArea": "228",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522154000/projects/cayan-138/9.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525097919/projects/cayan-138/interior/13.jpg"
    ]
  },
  {
    "id": "127",
    "description": "We present to you our new project which is located in GAZIOSMAN PASA which is 5 minutes away from Taksim and Levent. And 15 minutes from the Bosporus which makes this project very important and strategic investment opportunity. It's also located directly on a main highway which leads to the asian side through Fatih Sultan Mehmet Bridge. It's also very close to the new metro station which is being built and will connect kabatas and mahmut bey area.",
    "descriptionAr": "نقدم لكم مشروعنا الجديد الذي يقع في منطقة غازي عثمان باشا حيث يبعد  مسافة 5 دقايق عن كل من منطقة تقسيم وليفينت وبما لا يزيد عن 15 دقيقة عن مضيق البوسفور مما يكسب اهمية استراتيجية و استثمارية عالية وجود المشروع على طريق السريع مباشرة حيث يؤدي الى القسم الاسيوي عبر جسر السلطان محمد الفاتح كما ان المشروع قريب من محطة المترو المستقبلية تصل بين منطقة كاباتاش بمنطقة محمود بي قرب المشروع لمركز المدينة ووجود محطة مترو مستقبلية يجعل منه فرصة استثمارية مميزة نتيجة ارتفاع الاسعار بعد تشغيل خط المترو كما يتميز بقربه لكافة المؤسسات الخدمية من مشافي في خاصة وعامة ومدارس وجامعات  .",
    "descriptionShort": "We present to you our new project which is located in GAZIOSMAN PASA which is 5 minutes away from Taksim and Levent.",
    "descriptionShortAr": "نقدم لكم مشروعنا الجديد الذي يقع في منطقة غازي عثمان باشا حيث يبعد مسافة 5 دقايق عن كل من منطقة تقسيم وليفينت .",
    "typesAll": "2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 131738
    },
    "priceMax": {
      "USD": 296598
    },
    "area": "93m - 201m",
    "name": "Tem Avrasya",
    "location": "GAZIOSMAN PAŞA, Istanbul",
    "locationAr": "غازي عثمان باشا ،اسطنبول",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "36",
    "deliveryDate": "2019",
    "deliveryDateAr": "2019",
    "downPayment": "35",
    "lat": 41.016431,
    "lng": 28.653232,
    "types": [{
        "type": "2+1",
        "minPrice": {
          "USD": 131738
        },
        "maxPrice": {
          "USD": 178213
        },
        "minArea": "93",
        "maxArea": "115",
        "plan": "http://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,w_500/v1522153893/projects/cayan-127/2_1.gif"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 165607
        },
        "maxPrice": {
          "USD": 227895
        },
        "minArea": "100",
        "maxArea": "134",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,w_500/v1522153893/projects/cayan-127/3_1.gif"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 295126
        },
        "maxPrice": {
          "USD": 296610
        },
        "minArea": "201",
        "maxArea": "201",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,w_500/v1522153893/projects/cayan-127/4_1.gif"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153888/projects/cayan-127/9.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525187864/projects/cayan-127/interior/11.jpg"
    ]
  },
  {
    "id": "132",
    "description": "We present to you our investment and housing project which is located by the basin ekspres road. This luxurious project has the most advanced technology in the housing field and ready with all the comfort services available. It's very close to ataturk airport and about 2 KM away from the TEM highway. It' also close to the 3 biggest malls in istanbul.",
    "descriptionAr": " نقدم لكم مشروعنا الاستثماري والسكني في وقت واحد الجديد المميز الاول في اسطنبول على طريق باسن اكسبرس نقدم ارقى الابراج المعمارية ذو احدث التكنولوجيا وبجميع وسائل  الراحة والخدمات كما يميز موقع المشروع بقربه من مطار اتاتورك 6 دقايق  يبعد عن طريق التيم 2كلم  يبعد عن ابرز ثلاث مولات في اسطنبول 2كلم يحيط به الاوتيلات واكبر ماركات التركيه للالبسه يبعد عن مركز اسطنبول 20 كلما.",
    "descriptionShort": "We present to you our investment and housing project which is located by the basin ekspres road",
    "descriptionShortAr": "نقدم لكم مشروعنا الاستثماري والسكني في وقت واحد الجديد المميز الاول في اسطنبول على طريق باسن اكسبرس.",
    "typesAll": "1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 147069
    },
    "priceMax": {
      "USD": 52648
    },
    "area": "75m - 231m",
    "name": "norlo park",
    "location": "GAZIOSMAN PAŞA, Istanbul",
    "locationAr": "غازي عثمان باشا ،اسطنبول",
    "status": "Ready",
    "statusAr": "جاهز",
    "installment": "50",
    "deliveryDate": "Ready",
    "deliveryDateAr": "جاهز",
    "downPayment": "35",
    "lat": 41.047403,
    "lng": 28.816917,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 147069
        },
        "maxPrice": {
          "USD": 210098
        },
        "minArea": "75",
        "maxArea": "88",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153939/projects/cayan-132/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 210098
        },
        "maxPrice": {
          "USD": 308968
        },
        "minArea": "81",
        "maxArea": "134",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153939/projects/cayan-132/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 284251
        },
        "maxPrice": {
          "USD": 401659
        },
        "minArea": "159",
        "maxArea": "204",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153939/projects/cayan-132/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 383121
        },
        "maxPrice": {
          "USD": 526482
        },
        "minArea": "225",
        "maxArea": "231",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153939/projects/cayan-132/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153940/projects/cayan-132/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153940/projects/cayan-132/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153940/projects/cayan-132/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153940/projects/cayan-132/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153940/projects/cayan-132/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153940/projects/cayan-132/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522153942/projects/cayan-132/cayan-132.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097688/projects/cayan-132/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097688/projects/cayan-132/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097688/projects/cayan-132/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097688/projects/cayan-132/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097688/projects/cayan-132/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525097688/projects/cayan-132/interior/6.jpg"
    ]
  },
  {
    "id": "103",
    "description": "This special project is located in Avcilar with an incredible view on the sea and kucukcekmece lake. Each apartment is equipt with smart home system. The project's location makes it one of the most important investment opportunity. It's about 800m from the metrobus and university of Istanbul, plus it's near the faires in avcilar and the new metro station which will connect yenikapi and kucukcekmece.",
    "descriptionAr": "نقدم لكم مشروعنا الجديد والمميز الذي يقع في منطقة أفجلار بإطلالات ساحرة على البحر وبحيرة كوشك شكمجي  بالإضافة إلى تميز وتفرد الشقق بنظام المنزل الذكي، موقع المشروع يجعله من أهم المشاريع الإستثمارية في اسطنبول ، فهو يبعد مسافة 800 م عن محطة الميتروبوس وجامعة اسطنبول ، بالإضافة لقربه من عبارة أفجلار المائية وخط الميترو الجديد المقرر وصوله الى يني كابي ومنطقة كجوك جكمجه.ا.",
    "descriptionShort": "This special project is located in Avcilar with an incredible view on the sea and kucukcekmece lake",
    "descriptionShortAr": "نقدم لكم مشروعنا الجديد والمميز الذي يقع في منطقة أفجلار بإطلالات ساحرة على البحر وبحيرة كوشك شكمجي.",
    "typesAll": "1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 97638
    },
    "priceMax": {
      "USD": 305273
    },
    "area": "75m - 195m",
    "name": "Fayrouz koy",
    "location": "Avcilar, Istanbul",
    "locationAr": "افجلار ،اسطنبول",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "48",
    "deliveryDate": "2019",
    "deliveryDateAr": "2019",
    "downPayment": "30",
    "lat": 41.006222,
    "lng": 28.702933,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 97638
        },
        "maxPrice": {
          "USD": 123592
        },
        "minArea": "75",
        "maxArea": "88",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 148805
        },
        "maxPrice": {
          "USD": 221724
        },
        "minArea": "116",
        "maxArea": "156",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 220983
        },
        "maxPrice": {
          "USD": 288217
        },
        "minArea": "169",
        "maxArea": "188",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 256330
        },
        "maxPrice": {
          "USD": 305273
        },
        "minArea": "189",
        "maxArea": "195",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152824/projects/cayan-103/7.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/13.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525093238/projects/cayan-103/interior/14.jpg"
    ]
  },
  {
    "id": "97",
    "description": "This special project is located in Avcilar with an incredible view on the sea and kucukcekmece lake. Each apartment is equipt with smart home system. The project's location makes it one of the most important investment opportunity. It's about 800m from the metrobus and university of Istanbul, plus it's near the faires in avcilar and the new metro station which will connect yenikapi and kucukcekmece.",
    "descriptionAr": "نقدم لكم مشروعنا الجديد والمميز الذي يقع في منطقة أفجلار بإطلالات ساحرة على البحر وبحيرة كوشك شكمجي  بالإضافة إلى تميز وتفرد الشقق بنظام المنزل الذكي، موقع المشروع يجعله من أهم المشاريع الإستثمارية في اسطنبول ، فهو يبعد مسافة 800 م عن محطة الميتروبوس وجامعة اسطنبول ، بالإضافة لقربه من عبارة أفجلار المائية وخط الميترو الجديد المقرر وصوله الى يني كابي ومنطقة كجوك جكمجه.ا.",
    "descriptionShort": "This special project is located in Avcilar with an incredible view on the sea and kucukcekmece lake",
    "descriptionShortAr": "نقدم لكم مشروعنا الجديد والمميز الذي يقع في منطقة أفجلار بإطلالات ساحرة على البحر وبحيرة كوشك شكمجيس.",
    "typesAll": "1+0, 1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 91952
    },
    "priceMax": {
      "USD": 478797
    },
    "area": "39m - 267m",
    "name": "Toya Next",
    "location": "Avcilar, Istanbul",
    "locationAr": "افجلار ،اسطنبول",
    "status": "Under Construction",
    "statusAr": "تحت الانشاء",
    "installment": "48",
    "deliveryDate": "2019",
    "deliveryDateAr": "2019",
    "downPayment": "30",
    "lat": 41.059054,
    "lng": 28.816230,
    "types": [{
        "type": "1+0",
        "minPrice": {
          "USD": 91952
        },
        "maxPrice": {
          "USD": 105548
        },
        "minArea": "39",
        "maxArea": "73",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152757/projects/cayan-97/1_0.jpg"
      },
      {
        "type": "1+1",
        "minPrice": {
          "USD": 128579
        },
        "maxPrice": {
          "USD": 169378
        },
        "minArea": "71",
        "maxArea": "84",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152757/projects/cayan-97/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 168142
        },
        "maxPrice": {
          "USD": 284110
        },
        "minArea": "88",
        "maxArea": "137",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152757/projects/cayan-97/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 330844
        },
        "maxPrice": {
          "USD": 375846
        },
        "minArea": "197",
        "maxArea": "188",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152757/projects/cayan-97/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 442361
        },
        "maxPrice": {
          "USD": 478957
        },
        "minArea": "261",
        "maxArea": "267",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152757/projects/cayan-97/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_500/v1522152762/projects/cayan-97/9.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525098730/projects/cayan-97/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525098730/projects/cayan-97/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525098730/projects/cayan-97/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525098730/projects/cayan-97/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525098730/projects/cayan-97/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525098730/projects/cayan-97/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525098730/projects/cayan-97/interior/7.jpg"
    ]
  },
  {
    "id": "41",
    "description": "This project is built in the beautiful bahcesehir area on the Eurpoean side which is considered one of the most important investment areas in Istanbul.",
    "descriptionAr": " تم بناء المشروع في منطقه بهشي شاهير في الجانب الاوروبي والتي تعتبر ابرز مناطق الاشتثماريه العقاريه في مدينه اسطنبول موقع استثماري تشهد منطقة بهشي شهيرر ثورة عقارية بسبب بعدها عن صخب المدينه يوجد في كل مبنى 4 مصاعد .3 للسكان وواحد للخدماتا.",
    "descriptionShort": "This project is built in the beautiful bahcesehir area on the Eurpoean side which is considered one of the most important investment areas in Istanbul.",
    "descriptionShortAr": "تم بناء المشروع في منطقه بهشي شاهير في الجانب الاوروبي والتي تعتبر ابرز مناطق الاشتثماريه العقاريه في مدينه اسطنبول  .",
    "typesAll": "1+1, 2+1, 3+1, 4+1",
    "priceMin": {
      "USD": 104594
    },
    "priceMax": {
      "USD": 291775
    },
    "area": "69m - 241m",
    "name": "Gül Panorama",
    "location": "Esenyurt, Istanbul",
    "locationAr": " اسينيورت، اسطنبول ",
    "status": "Ready",
    "statusAr": "جاهز",
    "installment": "36",
    "deliveryDate": "Ready",
    "deliveryDateAr": "جاهز",
    "downPayment": "30",
    "lat": 41.016431,
    "lng": 28.653232,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 104594
        },
        "maxPrice": {
          "USD": 104594
        },
        "minArea": "69",
        "maxArea": "71",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152708/projects/cayan-41/1_1.jpg"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 137728
        },
        "maxPrice": {
          "USD": 174076
        },
        "minArea": "101",
        "maxArea": "118",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152708/projects/cayan-41/2_1.jpg"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 171360
        },
        "maxPrice": {
          "USD": 266560
        },
        "minArea": "197",
        "maxArea": "188",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152708/projects/cayan-41/3_1.jpg"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 240101
        },
        "maxPrice": {
          "USD": 291782
        },
        "minArea": "184",
        "maxArea": "241",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152708/projects/cayan-41/4_1.jpg"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152712/projects/cayan-41/13.jpg"
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/9.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/10.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/11.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/12.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/13.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1525098509/projects/cayan-41/interior/14.jpg"
    ]
  }, {
    "id": "15",
    "description": "Located in the beautiful Demirtas, Bursa. The project is built on an area of 232,000m. Its only 10 minutes away from the city center, 5 minutes from the famous shopping center in the area and around 30 minutes from the privet beach located inside the project on the marmara sea. It's also close to the bus and metro stop. This luxurious project has all the comfortable needs and services such as cafes, resturants, markets, pharamcies and dry cleanings. It's has 24/7 security with camera surveillance. With a tennis, football courts, swimming pools and green parks  ",
    "descriptionAr": "كيان 15 يقع في منطقه ديمرتاش في مدينه بورصه تم تشييد المشروع على مساحه 232.000 متر مربع  هذا المشروع السكني المميز يبعد فقط 10دقائق عن وسط المدينه وبعد5دقائق بالسياره من مركز التسوق الشهير و30دقيقه من الشاطئ الخاص بالمشروع على بجر مرمره في منطقه ميدونيا ويقع بجوار محطه الاوتوبوس وكذالك محطه المترو هذا المشروع السكني فائق الفخامة له وسائل راحة كثيرة مثل المقاهي والمطاعم محلات السوبر ماركت ، صيدليات ، تنظيف ملابس ، خياط ، نظام أمن على مدار الساعة مع أنظمة كاميرات مراقبة مسارات للجري  وسائل نقل في المشروع نفسه الزورق مجداف قارب موقف للسيارات وحمامات بديكور رائع ملعب تنس ومناطق استرحاء وحمامات الشمس مع التراسات والساحات والحدائق ملونه وحمامات السباحه . ا.",
    "descriptionShort": "Located in the beautiful Demirtas, Bursa. The project is built on an area of 232,000m ",
    "descriptionShortAr": " كيان 15 يقع في منطقه ديمرتاش في مدينه بورصه تم تشييد المشروع على مساحه 232.000 متر مربع  هذا المشروع السكني المميزرر.",
    "name": "Bursa Modern",
    "typesAll": "1+1, 2+1, 3+1, 4+1, 5+2",
    "priceMin": {
      "USD": 68269
    },
    "priceMax": {
      "USD": 947154
    },
    "area": "70m - 586m",
    "location": "Demirtas, Bursa",
    "locationAr": "دميرتاش بورصة",
    "status": "Ready",
    "statusAr": "جاهز",
    "installment": "48",
    "deliveryDate": "Ready",
    "deliveryDateAr": "جاهز",
    "downPayment": "15",
    "lat": 40.204058,
    "lng": 28.968732,
    "types": [{
        "type": "1+1",
        "minPrice": {
          "USD": 68269
        },
        "maxPrice": {
          "USD": 98831
        },
        "minArea": "70",
        "maxArea": "87",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1523955431/projects/cayan-15/Screen_Shot_2018-04-17_at_11.53.28.png"
      },
      {
        "type": "2+1",
        "minPrice": {
          "USD": 102885
        },
        "maxPrice": {
          "USD": 202590
        },
        "minArea": "105",
        "maxArea": "186",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1523955431/projects/cayan-15/Screen_Shot_2018-04-17_at_11.53.37.png"
      },
      {
        "type": "3+1",
        "minPrice": {
          "USD": 117024
        },
        "maxPrice": {
          "USD": 213146
        },
        "minArea": "120",
        "maxArea": "241",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1523955431/projects/cayan-15/Screen_Shot_2018-04-17_at_11.53.28.png"
      },
      {
        "type": "4+1",
        "minPrice": {
          "USD": 153004
        },
        "maxPrice": {
          "USD": 194444
        },
        "minArea": "191",
        "maxArea": "216",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1523955431/projects/cayan-15/Screen_Shot_2018-04-17_at_11.53.37.png"
      },
      {
        "type": "5+2",
        "minPrice": {
          "USD": 763236
        },
        "maxPrice": {
          "USD": 947359
        },
        "minArea": "586",
        "maxArea": "586",
        "plan": "https://res.cloudinary.com/dd5e5iszi/image/upload/v1523955431/projects/cayan-15/Screen_Shot_2018-04-17_at_11.53.37.png"
      }
    ],
    "images": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152691/projects/cayan-15/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152692/projects/cayan-15/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152688/projects/cayan-15/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152691/projects/cayan-15/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152692/projects/cayan-15/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/v1522152692/projects/cayan-15/7.jpg"
    ],
    "interior": [
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525098122/projects/cayan-15/interior/1.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525098122/projects/cayan-15/interior/2.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525098122/projects/cayan-15/interior/3.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525098122/projects/cayan-15/interior/4.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_60/v1525098122/projects/cayan-15/interior/5.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_10/v1525098122/projects/cayan-15/interior/6.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_20/v1525098122/projects/cayan-15/interior/7.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_30/v1525098122/projects/cayan-15/interior/8.jpg",
      "https://res.cloudinary.com/dd5e5iszi/image/upload/q_40/v1525098122/projects/cayan-15/interior/9.jpg"
    ]
  }
]


  const addCurrencies = (projects) => {

    // const res = await fetch('https://openexchangerates.org/api/latest.json?app_id=ec60cf523d0f4912bc160406c1703489').then(res => res.json())
      // console.log('api')
      // console.log(res)

    fx.rates = {
      "TRY" : 4.06,
      "AED" : 3.67,
      "SAR" : 3.75,
      "KWD" : 0.30,
      "QAR" : 3.64,
      "BHD" : 0.38

    }
    fx.base = 'USD'

      const returnValue = projects.map((project) => {
        project.priceMin.TRY = Math.ceil(fx.convert(project.priceMin.USD, {from: 'USD', to: 'TRY'}))
        project.priceMax.TRY = Math.ceil(fx.convert(project.priceMax.USD, {from: 'USD', to: 'TRY'}))

        project.priceMin.AED = Math.ceil(fx.convert(project.priceMin.USD, {from: 'USD', to: 'AED'}))
        project.priceMax.AED = Math.ceil(fx.convert(project.priceMax.USD, {from: 'USD', to: 'AED'}))

        project.priceMin.SAR = Math.ceil(fx.convert(project.priceMin.USD, {from: 'USD', to: 'SAR'}))
        project.priceMax.SAR = Math.ceil(fx.convert(project.priceMax.USD, {from: 'USD', to: 'SAR'}))

        project.priceMin.KWD = Math.ceil(fx.convert(project.priceMin.USD, {from: 'USD', to: 'KWD'}))
        project.priceMax.KWD = Math.ceil(fx.convert(project.priceMax.USD, {from: 'USD', to: 'KWD'}))

        project.priceMin.QAR = Math.ceil(fx.convert(project.priceMin.USD, {from: 'USD', to: 'QAR'}))
        project.priceMax.QAR = Math.ceil(fx.convert(project.priceMax.USD, {from: 'USD', to: 'QAR'}))

        project.priceMin.BHD = Math.ceil(fx.convert(project.priceMin.USD, {from: 'USD', to: 'BHD'}))
        project.priceMax.BHD = Math.ceil(fx.convert(project.priceMax.USD, {from: 'USD', to: 'BHD'}))

        project.types = project.types.map((type) => {
        type.minPrice.TRY = Math.ceil(fx.convert(type.minPrice.USD, {from: 'USD', to: 'TRY'}))
        type.maxPrice.TRY = Math.ceil(fx.convert(type.maxPrice.USD, {from: 'USD', to: 'TRY'}))

        type.minPrice.AED = Math.ceil(fx.convert(type.minPrice.USD, {from: 'USD', to: 'AED'}))
        type.maxPrice.AED = Math.ceil(fx.convert(type.maxPrice.USD, {from: 'USD', to: 'AED'}))

        type.minPrice.SAR = Math.ceil(fx.convert(type.minPrice.USD, {from: 'USD', to: 'SAR'}))
        type.maxPrice.SAR = Math.ceil(fx.convert(type.maxPrice.USD, {from: 'USD', to: 'SAR'}))

        type.minPrice.KWD = Math.ceil(fx.convert(type.minPrice.USD, {from: 'USD', to: 'KWD'}))
        type.maxPrice.KWD = Math.ceil(fx.convert(type.maxPrice.USD, {from: 'USD', to: 'KWD'}))

        type.minPrice.QAR = Math.ceil(fx.convert(type.minPrice.USD, {from: 'USD', to: 'QAR'}))
        type.maxPrice.QAR = Math.ceil(fx.convert(type.maxPrice.USD, {from: 'USD', to: 'QAR'}))

        type.minPrice.BHD = Math.ceil(fx.convert(type.minPrice.USD, {from: 'USD', to: 'BHD'}))
        type.maxPrice.BHD = Math.ceil(fx.convert(type.maxPrice.USD, {from: 'USD', to: 'BHD'}))
          return type
        })
        return project
      })
      return returnValue
  }

  const projects = addCurrencies(rawProjects)
export { projects } ;
