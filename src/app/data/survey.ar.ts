export const jsonAr = {
  "showProgressBar": "off",
  "showNavigationButtons": false,
  "pages": [{
    "elements": [
      {
      "type": "matrix",
      "name": "Quality",
      "title": "يرجى تحديد ما إذا كنت توافق أو تختلف مع العبارات التالية",
      "isRequired": true,
      "columns": [{
        "value": 1,
        "text": "أرفض بشدة"
      }, {
        "value": 2,
        "text": "أرفض"
      }, {
        "value": 3,
        "text": "محايد"
      }, {
        "value": 4,
        "text": "أوافق"
      }, {
        "value": 5,
        "text": "أوافق بشدة"
      }],
      "rows": [{
        "value": "ميسور التكلفة",
        "text": "المنتج ميسور التكلفة"
      }, {
        "value": "يقوم بما يدعيه",
        "text": "المنتج يقوم بما يدعيه"
      }, {
        "value": "أفضل من المنتجات الأخرى",
        "text": "المنتج أفضل من المنتجات الأخرى في السوق"
      }, {
        "value": "سهل الاستخدام",
        "text": "المنتج سهل الاستخدام"
      }]
    }, {
      "type": "rating",
      "name": "satisfaction",
      "title": "ما مدى رضاك عن المنتج؟",
      "mininumRateDescription": "غير راضي",
      "maximumRateDescription": "راضي تماماً"
    }, {
      "type": "rating",
      "name": "recommend friends",
      "visibleIf": "{satisfaction} > 3",
      "title": "ما مدى احتمالية أن توصي بهذا المنتج لصديق أو زميل؟",
      "mininumRateDescription": "لن أوصي به",
      "maximumRateDescription": "سأوصي به"
    }, {
      "type": "comment",
      "name": "suggestions",
      "title": "ما الذي يمكن أن يجعلك أكثر رضا عن المنتج؟"
    },{
      "type": "radiogroup",
      "name": "price to competitors",
      "title": "مقارنة بمنافسينا، هل تشعر أن المنتج",
      "choices": [
        "أقل تكلفة",
        "بنفس السعر تقريباً",
        "أغلى",
        "غير متأكد"
      ]
    }, {
      "type": "radiogroup",
      "name": "price",
      "title": "هل تشعر أن سعرنا الحالي مبرر من قبل منتجنا؟",
      "choices": [
        "correct|نعم، السعر مناسب",
        "low|لا، السعر منخفض جداً",
        "high|لا، السعر مرتفع جداً"
      ]
    }, {
      "type": "multipletext",
      "name": "pricelimit",
      "title": "ما هو...",
      "items": [{
        "name": "mostamount",
        "title": "أكبر مبلغ ستدفعه لمنتج مثل منتجنا"
      }, {
        "name": "leastamount",
        "title": "أقل مبلغ ستشعر بالراحة في دفعه"
      }]
    }]
  }, {
    "elements": [{
      "type": "text",
      "name": "email",
      "title": "شكراً لك على المشاركة في استطلاعنا. يرجى إدخال عنوان بريدك الإلكتروني والضغط على زر \"إرسال\"."
    }]
  }]
};