loadData({
medical_specialties: [
{
id: 2,
name: "Cardiovascular",
subtitle: "[subtítulo cardiologia]",
description: "[descrição cardiologia]",
icon: "https://agnitio-philips.s3.amazonaws.com/uploads/medical_specialty/icon/2/cardiologia.png",
color: "#d13139",
exam_ids: [
2,
12,
22,
32,
42,
52,
62,
72,
82,
102,
122,
172,
182,
192,
202,
212,
242,
272,
282,
412
],
default_exam_ids: [
412
]
},
{
id: 22,
name: "Saúde da Mulher",
subtitle: "[subtítulo saude-da-mulher]",
description: "[descrição saude-da-mulher]",
icon: "https://agnitio-philips.s3.amazonaws.com/uploads/medical_specialty/icon/22/saude-da-mulher.png",
color: "#61a512",
exam_ids: [
132,
142,
222,
232,
332,
342,
352
],
default_exam_ids: [ ]
},
{
id: 32,
name: "Radiologia Ultrassom Geral",
subtitle: "[subtítulo radiologia]",
description: "[descrição radiologia]",
icon: "https://agnitio-philips.s3.amazonaws.com/uploads/medical_specialty/icon/32/radiologia.png",
color: "#005cb9",
exam_ids: [
152,
162,
292,
302,
312,
322,
362,
422
],
default_exam_ids: [
422
]
},
{
id: 12,
name: "Urologia",
subtitle: "[subtítulo urologia]",
description: "[descrição urologia]",
icon: "https://agnitio-philips.s3.amazonaws.com/uploads/medical_specialty/icon/12/radiologia.png",
color: "#2a2c80",
exam_ids: [ ],
default_exam_ids: [ ]
}
],
exams: [
{
id: 2,
description: "",
default_exam: false,
name: "Cardiologia Adulto",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 122,
optional: false,
recommended: true
},
{
id: 102,
optional: false,
recommended: true
},
{
id: 132,
optional: false,
recommended: true
},
{
id: 112,
optional: false,
recommended: true
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 12,
description: "",
default_exam: false,
name: "Cardiologia Pediátrico",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 122,
optional: false,
recommended: false
},
{
id: 102,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 112,
optional: false,
recommended: false
},
{
id: 152,
optional: true,
recommended: true
},
{
id: 142,
optional: true,
recommended: true
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 22,
description: "",
default_exam: false,
name: "Cardiologia Neonatal",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 172,
optional: true,
recommended: true
},
{
id: 162,
optional: true,
recommended: true
},
{
id: 152,
optional: true,
recommended: false
},
{
id: 142,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
42,
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 32,
description: "",
default_exam: false,
name: "Transesofágico Adulto 2D",
medical_specialty_id: 2,
parent_id: 2,
portable_equipment: false,
transducer_ids: [
{
id: 192,
optional: true,
recommended: false
},
{
id: 182,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
42,
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 42,
description: "",
default_exam: false,
name: "Transesofágico Pediátrico 2D",
medical_specialty_id: 2,
parent_id: 12,
portable_equipment: false,
transducer_ids: [
{
id: 212,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
102,
112,
122
]
},
{
id: 52,
description: "",
default_exam: false,
name: "Transtorácico Adulto 3D",
medical_specialty_id: 2,
parent_id: 242,
portable_equipment: false,
transducer_ids: [
{
id: 222,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 162,
optional: true
}
],
equipment_ids: [
112,
122
]
},
{
id: 62,
description: "",
default_exam: false,
name: "Transtorácico 3D Pediátrico",
medical_specialty_id: 2,
parent_id: 242,
portable_equipment: false,
transducer_ids: [
{
id: 222,
optional: true,
recommended: false
},
{
id: 232,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 162,
optional: true
}
],
equipment_ids: [
112,
122
]
},
{
id: 72,
description: "",
default_exam: false,
name: "Transesofagico Adulto 3D",
medical_specialty_id: 2,
parent_id: 242,
portable_equipment: false,
transducer_ids: [
{
id: 202,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 162,
optional: true
},
{
id: 132,
optional: true
}
],
equipment_ids: [
112,
122,
142
]
},
{
id: 82,
description: "",
default_exam: false,
name: "Stress",
medical_specialty_id: 2,
parent_id: 2,
portable_equipment: false,
transducer_ids: [
{
id: 122,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 112,
optional: false,
recommended: false
}
],
software_ids: [
{
id: 112,
optional: false
}
],
equipment_ids: [
42,
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 102,
description: "",
default_exam: false,
name: "Strain",
medical_specialty_id: 2,
parent_id: 2,
portable_equipment: false,
transducer_ids: [
{
id: 122,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 152,
optional: true,
recommended: false
},
{
id: 142,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 192,
optional: true
},
{
id: 182,
optional: true
}
],
equipment_ids: [
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 122,
description: "Este exame é composto por...",
default_exam: false,
name: "Carótidas",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 332,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 272,
optional: false,
recommended: true
},
{
id: 252,
optional: false,
recommended: true
},
{
id: 262,
optional: false,
recommended: true
},
{
id: 242,
optional: false,
recommended: true
},
{
id: 282,
optional: false,
recommended: true
},
{
id: 352,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 102,
optional: false
}
],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 132,
description: "",
default_exam: false,
name: "Reprodução Humana",
medical_specialty_id: 22,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 22,
optional: false,
recommended: false
},
{
id: 32,
optional: false,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
},
{
id: 2,
optional: false,
recommended: false
},
{
id: 12,
optional: false,
recommended: false
},
{
id: 372,
optional: false,
recommended: false
},
{
id: 362,
optional: false,
recommended: false
},
{
id: 402,
optional: true,
recommended: false
},
{
id: 392,
optional: false,
recommended: false
},
{
id: 382,
optional: false,
recommended: false
},
{
id: 412,
optional: true,
recommended: false
},
{
id: 432,
optional: true,
recommended: false
},
{
id: 442,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
2,
12,
22,
32,
42,
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 142,
description: "",
default_exam: false,
name: "Medicina Fetal ",
medical_specialty_id: 22,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 62,
optional: true,
recommended: false
},
{
id: 52,
optional: true,
recommended: false
},
{
id: 22,
optional: false,
recommended: false
},
{
id: 32,
optional: false,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
},
{
id: 2,
optional: false,
recommended: false
},
{
id: 12,
optional: false,
recommended: false
},
{
id: 372,
optional: false,
recommended: false
},
{
id: 362,
optional: false,
recommended: false
},
{
id: 402,
optional: true,
recommended: false
},
{
id: 392,
optional: false,
recommended: false
},
{
id: 382,
optional: false,
recommended: false
},
{
id: 412,
optional: true,
recommended: false
},
{
id: 432,
optional: true,
recommended: false
},
{
id: 442,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 152,
description: null,
default_exam: false,
name: "Mama",
medical_specialty_id: 32,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 302,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [ ]
},
{
id: 162,
description: null,
default_exam: false,
name: "Tireoide",
medical_specialty_id: 32,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 332,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [ ]
},
{
id: 172,
description: "",
default_exam: false,
name: "Cardiologia Fetal",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 62,
optional: true,
recommended: true
},
{
id: 52,
optional: true,
recommended: false
},
{
id: 22,
optional: false,
recommended: true
},
{
id: 32,
optional: false,
recommended: true
},
{
id: 2,
optional: false,
recommended: true
},
{
id: 12,
optional: false,
recommended: true
},
{
id: 92,
optional: true,
recommended: false
},
{
id: 82,
optional: true,
recommended: false
},
{
id: 122,
optional: false,
recommended: false
},
{
id: 102,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 112,
optional: false,
recommended: false
},
{
id: 152,
optional: true,
recommended: false
},
{
id: 142,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 182,
description: "",
default_exam: false,
name: "Contraste Cardio Perfusão",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 132,
optional: false,
recommended: false
}
],
software_ids: [
{
id: 242,
optional: true
},
{
id: 252,
optional: true
}
],
equipment_ids: [
102,
112,
122
]
},
{
id: 192,
description: "",
default_exam: false,
name: "Doppler Cego",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 492,
optional: true,
recommended: false
},
{
id: 502,
optional: true,
recommended: false
},
{
id: 482,
optional: true,
recommended: false
},
{
id: 472,
optional: true,
recommended: false
},
{
id: 462,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
42,
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 202,
description: "",
default_exam: false,
name: "Vascular Periférico",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 332,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
},
{
id: 352,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 212,
description: "",
default_exam: false,
name: "Vascular Abdominal",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 22,
optional: false,
recommended: false
},
{
id: 32,
optional: false,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
},
{
id: 2,
optional: false,
recommended: false
},
{
id: 12,
optional: false,
recommended: false
},
{
id: 92,
optional: true,
recommended: false
},
{
id: 82,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 222,
description: "",
default_exam: false,
name: "Ginecologia Obstetrícia 2D",
medical_specialty_id: 22,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 22,
optional: false,
recommended: false
},
{
id: 32,
optional: false,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
},
{
id: 2,
optional: false,
recommended: false
},
{
id: 12,
optional: false,
recommended: false
},
{
id: 372,
optional: false,
recommended: false
},
{
id: 362,
optional: false,
recommended: false
},
{
id: 402,
optional: true,
recommended: false
},
{
id: 392,
optional: false,
recommended: false
},
{
id: 382,
optional: false,
recommended: false
},
{
id: 412,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
2,
12,
22,
32,
42,
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 232,
description: "",
default_exam: false,
name: "3D/4D",
medical_specialty_id: 22,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 62,
optional: true,
recommended: false
},
{
id: 52,
optional: true,
recommended: false
},
{
id: 432,
optional: true,
recommended: false
},
{
id: 442,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 152,
optional: false
},
{
id: 142,
optional: false
},
{
id: 172,
optional: false
}
],
equipment_ids: [
22,
52,
62,
102,
112,
122
]
},
{
id: 242,
description: "",
default_exam: false,
name: "Cardiologia Tridimensional",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [ ],
software_ids: [
{
id: 162,
optional: true
},
{
id: 132,
optional: true
}
],
equipment_ids: [
112,
122,
142
]
},
{
id: 272,
description: "",
default_exam: false,
name: "Contraste Cardio LVO",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 122,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 282,
description: "",
default_exam: false,
name: "Stress P",
medical_specialty_id: 2,
parent_id: 12,
portable_equipment: false,
transducer_ids: [
{
id: 132,
optional: false,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [ ]
},
{
id: 292,
description: "",
default_exam: false,
name: "Fusão & Navegação",
medical_specialty_id: 32,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 22,
optional: false,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 312,
optional: true
}
],
equipment_ids: [
102,
112
]
},
{
id: 302,
description: "",
default_exam: false,
name: "Musculoesquelético",
medical_specialty_id: 32,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 332,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
},
{
id: 322,
optional: true,
recommended: false
},
{
id: 312,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 312,
description: "",
default_exam: false,
name: "Intraoperatório",
medical_specialty_id: 32,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 72,
optional: true,
recommended: false
},
{
id: 322,
optional: true,
recommended: false
},
{
id: 312,
optional: true,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
42,
52,
62,
72,
102,
112,
122,
142
]
},
{
id: 322,
description: "",
default_exam: false,
name: "Elastografia de Mama",
medical_specialty_id: 32,
parent_id: 152,
portable_equipment: false,
transducer_ids: [
{
id: 342,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 262,
optional: true
}
],
equipment_ids: [
52,
62,
102,
112,
122
]
},
{
id: 332,
description: "",
default_exam: false,
name: "Elastografia de Mama",
medical_specialty_id: 22,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 342,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
}
],
software_ids: [
{
id: 262,
optional: false
}
],
equipment_ids: [
52,
62,
102,
112,
122
]
},
{
id: 342,
description: "",
default_exam: false,
name: "Elastografia Endocavitária",
medical_specialty_id: 22,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 372,
optional: false,
recommended: false
},
{
id: 402,
optional: false,
recommended: false
}
],
software_ids: [
{
id: 262,
optional: false
}
],
equipment_ids: [
52,
62,
102,
112,
122
]
},
{
id: 352,
description: "",
default_exam: false,
name: "Tireóide",
medical_specialty_id: 22,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 332,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
52,
62,
2,
12,
22,
72,
142,
102,
122,
112,
32,
42,
132
]
},
{
id: 362,
description: "exame padrão ",
default_exam: false,
name: "Medicina Interna",
medical_specialty_id: 32,
parent_id: null,
portable_equipment: false,
transducer_ids: [ ],
software_ids: [ ],
equipment_ids: [ ]
},
{
id: 412,
description: "Teste",
default_exam: true,
name: "Default (cardiovascular)",
medical_specialty_id: 2,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 112,
optional: false,
recommended: false
}
],
software_ids: [
{
id: 282,
optional: false
},
{
id: 12,
optional: false
},
{
id: 162,
optional: false
},
{
id: 152,
optional: false
},
{
id: 142,
optional: false
},
{
id: 192,
optional: false
}
],
equipment_ids: [
2,
32
]
},
{
id: 422,
description: "teste",
default_exam: true,
name: "Default (radiologia)",
medical_specialty_id: 32,
parent_id: null,
portable_equipment: false,
transducer_ids: [
{
id: 62,
optional: false,
recommended: false
}
],
software_ids: [ ],
equipment_ids: [
2
]
}
],
equipment: [
{
id: 2,
name: "ClearVue 350",
portable: false,
description: "ClearVue 350",
proposal: null,
competitor_ids: [
12,
72,
82,
142
],
transducer_ids: [
{
id: 42,
optional: false,
technology: null
},
{
id: 2,
optional: false,
technology: null
},
{
id: 432,
optional: false,
technology: null
},
{
id: 252,
optional: false,
technology: null
},
{
id: 262,
optional: false,
technology: null
},
{
id: 102,
optional: false,
technology: null
}
],
software_ids: [
{
id: 12,
optional: true
},
{
id: 22,
optional: false
},
{
id: 2,
optional: true
}
],
exam_ids: [
2,
12,
122,
132,
142,
172,
202,
212,
222,
302,
352,
412,
422
],
image_ids: [
2
],
kit_ids: [
2,
12,
22,
32,
42
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 12,
name: "ClearVue 550",
portable: false,
description: "ClearVue 550",
proposal: null,
competitor_ids: [
2,
92,
152
],
transducer_ids: [
{
id: 262,
optional: false,
technology: null
},
{
id: 102,
optional: false,
technology: null
}
],
software_ids: [ ],
exam_ids: [
2,
12,
122,
132,
142,
172,
202,
212,
222,
302,
352
],
image_ids: [ ],
kit_ids: [
152,
162,
172,
182,
192
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 22,
name: "ClearVue 650",
portable: false,
description: "ClearVue 650",
proposal: null,
competitor_ids: [
2,
102,
162
],
transducer_ids: [
{
id: 262,
optional: false,
technology: null
},
{
id: 102,
optional: false,
technology: null
}
],
software_ids: [ ],
exam_ids: [
2,
12,
122,
132,
142,
172,
202,
212,
222,
232,
302,
352
],
image_ids: [ ],
kit_ids: [
672,
682,
692,
702,
712
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 32,
name: "HD7 L",
portable: false,
description: "HD7 L",
proposal: null,
competitor_ids: [
22,
142
],
transducer_ids: [
{
id: 242,
optional: false,
technology: null
},
{
id: 112,
optional: false,
technology: null
}
],
software_ids: [ ],
exam_ids: [
2,
12,
122,
132,
142,
172,
202,
212,
222,
302,
352,
412
],
image_ids: [ ],
kit_ids: [
202,
212,
222,
232,
242
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 42,
name: "HD7 XE",
portable: false,
description: "HD7 XE",
proposal: null,
competitor_ids: [
2,
82,
92,
152
],
transducer_ids: [
{
id: 292,
optional: true,
technology: null
},
{
id: 242,
optional: false,
technology: null
},
{
id: 312,
optional: true,
technology: null
},
{
id: 112,
optional: false,
technology: null
},
{
id: 162,
optional: true,
technology: null
},
{
id: 142,
optional: true,
technology: null
},
{
id: 182,
optional: true,
technology: null
}
],
software_ids: [
{
id: 102,
optional: false
},
{
id: 112,
optional: true
}
],
exam_ids: [
2,
12,
22,
32,
82,
122,
132,
142,
172,
192,
202,
212,
222,
302,
312,
352
],
image_ids: [ ],
kit_ids: [
252,
262,
272,
282,
292
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 52,
name: "Affiniti 50",
portable: false,
description: "Affiniti 50",
proposal: '<p style="text-align: center;"><em><u><span style="font-size:20px;"><strong>AFFINITI 50</strong></span></u></em></p> <p>Providenciar o melhor cuidado com a sa&uacute;de dos seus pacientes &eacute; uma necessidade real e crescente. Mas &eacute; esperado que seja feito em menos tempo, com menos recursos e maior volume de pacientes. O atendimento que voc&ecirc; quer proporcionar necessita de ferramentas que permitam encarar estes desafios e estar sempre &agrave; frente. O novo ultrassom Philips Affiniti 50 entende a sua necessidade e inova o mercado com n&iacute;vel superior de qualidade de imagem, incorpora&ccedil;&atilde;o de novas aplica&ccedil;&otilde;es cl&iacute;nicas e o que h&aacute; de mais atual em facilidade de uso e design. Desenvolvido para ser eficiente e confi&aacute;vel, com a tradicional qualidade de imagem e durabilidade de ultrassons Philips.</p> <p>&nbsp;</p> <ol> <li>Painel de controle simplificado, com poucos bot&otilde;es e nova tela de toque (touch-screen) estilo Tablet, com imagem em tempo real, que revoluciona a intera&ccedil;&atilde;o com o equipamento, resultando em redu&ccedil;&atilde;o relevante das dist&acirc;ncias para alcance dos bot&otilde;es e etapas para completar um exame.</li> <li>&bull; Equipamento leve e compacto pesando apenas 83,6 kg &ndash; Affiniti 50 &eacute; 16% mais leve que equipamentos mais antigos de sua categoria.</li> <li>&bull; Monitor LCD de 21,5 polegadas de alta defini&ccedil;&atilde;o para f&aacute;cil visualiza&ccedil;&atilde;o em qualquer ambiente.</li> </ol> <p>&nbsp;</p> <p style="text-align: center;"><strong><span style="font-size:22px;"><span style="font-family: arial,helvetica,sans-serif;">Texto Feito no Ckeditor</span></span></strong></p> <p style="text-align: center;"><span style="font-size:22px;"><span style="font-family: arial,helvetica,sans-serif;">Texto texto dededededdeeded</span></span></p> <p style="text-align: right;"><span style="font-size:22px;"><span style="font-family: arial,helvetica,sans-serif;">Texto direita</span></span></p> <p><span style="font-size:22px;"><span style="font-family: arial,helvetica,sans-serif;">Texto esqueda</span></span></p> <p>&nbsp;</p> <p style="text-align: center;"><span style="font-family:vejafranklin,helvetica,arial,sans-serif;">&nbsp; avi&atilde;o&nbsp;&nbsp;&nbsp;&nbsp;</span></p> <p style="text-align: center;"><span style="font-family:vejafranklin,helvetica,arial,sans-serif;">Teste de letras: a A &Aacute; &ccedil; &Ccedil;</span></p> <p style="text-align: center;">&nbsp;</p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. <span style="font-size:18px;"><em>Nunc imperdiet gravida mauris.</em></span></p> <p>&nbsp;</p> <p style="text-align: right;"><span style="font-family:arial,helvetica,sans-serif;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.</span></p> <p>&nbsp;</p> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis.<strong> Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.</strong><br /> &nbsp;</p> <p style="text-align: center;">&nbsp;</p> <ol> <li>ASDFADSFA</li> <li>ASDFADSFASD</li> <li>ASDFASDFADS</li> </ol> <p>&nbsp;</p> <ul> <li>aaaaaa</li> <li>bbbbb</li> <li>ccccc</li> <li>ddddd</li> </ul> <p>&nbsp;</p> <p style="margin-left: 120px;">Texto com&nbsp; pro lado 3 vezes</p> <p style="margin-left: 120px;">dededededededdededed</p> <p style="margin-left: 120px;">dededededededededed</p>',
competitor_ids: [
32,
112,
172
],
transducer_ids: [
{
id: 62,
optional: true,
technology: null
},
{
id: 32,
optional: false,
technology: null
},
{
id: 402,
optional: false,
technology: null
},
{
id: 332,
optional: true,
technology: null
},
{
id: 302,
optional: true,
technology: null
},
{
id: 272,
optional: false,
technology: null
},
{
id: 322,
optional: true,
technology: null
},
{
id: 352,
optional: true,
technology: null
},
{
id: 92,
optional: true,
technology: null
},
{
id: 122,
optional: false,
technology: null
},
{
id: 172,
optional: true,
technology: null
},
{
id: 152,
optional: true,
technology: null
},
{
id: 192,
optional: true,
technology: null
},
{
id: 212,
optional: true,
technology: null
}
],
software_ids: [
{
id: 12,
optional: false
},
{
id: 32,
optional: false
},
{
id: 62,
optional: false
},
{
id: 42,
optional: false
},
{
id: 102,
optional: false
},
{
id: 22,
optional: false
},
{
id: 2,
optional: false
},
{
id: 52,
optional: true
},
{
id: 262,
optional: true
},
{
id: 112,
optional: true
}
],
exam_ids: [
2,
12,
22,
32,
42,
82,
102,
122,
132,
142,
172,
192,
202,
212,
222,
232,
272,
302,
312,
322,
332,
342,
352
],
image_ids: [
12
],
kit_ids: [
52,
62,
72,
82,
92
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 62,
name: "Affiniti 70",
portable: false,
description: "Affiniti 70",
proposal: '<p>This is a mere test of images</p> <p><img alt="" height="43" src="https://agnitio-philips.s3.amazonaws.com/uploads/ckeditor/pictures/2/content_index.jpeg" width="43" /><img alt="" height="43" src="https://agnitio-philips.s3.amazonaws.com/uploads/ckeditor/pictures/22/content_1433530950_social_57.png" width="33" /></p>',
competitor_ids: [
42,
122
],
transducer_ids: [
{
id: 52,
optional: false,
technology: null
},
{
id: 22,
optional: false,
technology: null
},
{
id: 392,
optional: false,
technology: null
},
{
id: 332,
optional: true,
technology: null
},
{
id: 302,
optional: true,
technology: null
},
{
id: 272,
optional: false,
technology: null
},
{
id: 252,
optional: true,
technology: null
},
{
id: 322,
optional: true,
technology: null
},
{
id: 352,
optional: true,
technology: null
},
{
id: 122,
optional: true,
technology: null
},
{
id: 132,
optional: false,
technology: null
},
{
id: 172,
optional: true,
technology: null
},
{
id: 192,
optional: true,
technology: null
},
{
id: 212,
optional: true,
technology: null
}
],
software_ids: [
{
id: 102,
optional: false
},
{
id: 262,
optional: true
},
{
id: 112,
optional: true
}
],
exam_ids: [
2,
12,
22,
32,
42,
82,
102,
122,
132,
142,
172,
192,
202,
212,
222,
232,
272,
302,
312,
322,
332,
342,
352
],
image_ids: [ ],
kit_ids: [
102,
112,
122,
132,
142
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 72,
name: "CX50 2D",
portable: false,
description: "CX50 2D",
proposal: null,
competitor_ids: [ ],
transducer_ids: [
{
id: 22,
optional: false,
technology: null
},
{
id: 72,
optional: true,
technology: null
},
{
id: 452,
optional: true,
technology: null
},
{
id: 302,
optional: true,
technology: null
},
{
id: 252,
optional: false,
technology: null
},
{
id: 322,
optional: true,
technology: null
},
{
id: 92,
optional: true,
technology: null
},
{
id: 132,
optional: false,
technology: null
},
{
id: 172,
optional: true,
technology: null
},
{
id: 152,
optional: true,
technology: null
},
{
id: 192,
optional: true,
technology: null
}
],
software_ids: [
{
id: 102,
optional: false
},
{
id: 112,
optional: true
}
],
exam_ids: [
2,
12,
22,
32,
82,
102,
122,
132,
142,
172,
192,
202,
212,
222,
272,
302,
312,
352
],
image_ids: [ ],
kit_ids: [
532,
542,
552,
562,
572
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 102,
name: "EPIQ 5",
portable: false,
description: "EPIQ 5",
proposal: "",
competitor_ids: [
52,
132
],
transducer_ids: [
{
id: 22,
optional: false,
technology: null
},
{
id: 392,
optional: false,
technology: null
},
{
id: 332,
optional: true,
technology: null
},
{
id: 342,
optional: true,
technology: null
},
{
id: 302,
optional: true,
technology: null
},
{
id: 252,
optional: false,
technology: null
},
{
id: 322,
optional: true,
technology: null
},
{
id: 352,
optional: true,
technology: null
},
{
id: 132,
optional: false,
technology: null
},
{
id: 172,
optional: true,
technology: null
},
{
id: 192,
optional: true,
technology: null
},
{
id: 212,
optional: true,
technology: null
}
],
software_ids: [
{
id: 102,
optional: false
},
{
id: 262,
optional: true
},
{
id: 112,
optional: false
}
],
exam_ids: [
2,
12,
22,
32,
42,
82,
102,
122,
132,
142,
172,
182,
192,
202,
212,
222,
232,
272,
292,
302,
312,
322,
332,
342,
352
],
image_ids: [
122,
132,
142,
152
],
kit_ids: [
302,
312,
322,
332,
342
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 112,
name: "EPIQ 7 G",
portable: false,
description: "EPIQ 7 G",
proposal: null,
competitor_ids: [ ],
transducer_ids: [
{
id: 22,
optional: false,
technology: null
},
{
id: 392,
optional: false,
technology: null
},
{
id: 332,
optional: true,
technology: null
},
{
id: 342,
optional: true,
technology: null
},
{
id: 302,
optional: true,
technology: null
},
{
id: 252,
optional: false,
technology: null
},
{
id: 322,
optional: true,
technology: null
},
{
id: 352,
optional: true,
technology: null
},
{
id: 222,
optional: true,
technology: null
},
{
id: 232,
optional: true,
technology: null
},
{
id: 132,
optional: false,
technology: null
},
{
id: 172,
optional: true,
technology: null
},
{
id: 192,
optional: true,
technology: null
},
{
id: 212,
optional: true,
technology: null
},
{
id: 202,
optional: true,
technology: null
},
{
id: 512,
optional: true,
technology: null
}
],
software_ids: [
{
id: 162,
optional: true
},
{
id: 102,
optional: false
},
{
id: 132,
optional: true
},
{
id: 262,
optional: true
},
{
id: 112,
optional: false
},
{
id: 122,
optional: true
},
{
id: 82,
optional: false
}
],
exam_ids: [
2,
12,
22,
32,
42,
52,
62,
72,
82,
102,
122,
132,
142,
172,
182,
192,
202,
212,
222,
232,
242,
272,
292,
302,
312,
322,
332,
342,
352
],
image_ids: [ ],
kit_ids: [
402,
412,
422,
432,
442
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 122,
name: "EPIQ 7 C",
portable: false,
description: "EPIQ 7 C",
proposal: '<p style="text-align: center;"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:22px;"><strong>Proposta Philips</strong></span></span></p> <p style="text-align: right;"><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></p> <p>&nbsp;</p> <p><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp; Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></p> <p>&nbsp;</p> <p style="text-align: center;"><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></p> <p style="text-align: center;"><u><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></u></p> <p style="text-align: center;"><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></p> <p>&nbsp;</p> <p><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...</span></p> <p><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></p> <p><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></p> <p>&nbsp;</p> <p style="text-align: right;"><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...</span></p> <p style="text-align: right;"><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></p> <p style="text-align: right;"><span style="font-family:arial,helvetica,sans-serif;">Este equipamento &eacute; composto pelas fucionalidades...&nbsp;</span></p> <p>&nbsp;</p> <ol> <li>teste teste teste</li> <li>teste teste teste</li> <li>teste teste teste</li> <li>teste teste teste&nbsp;</li> </ol> <ul> <li>teste <strong>teste</strong> teste</li> <li><em>teste</em> teste teste</li> <li><u>teste</u> teste teste</li> <li><s>teste</s> teste teste</li> <li><span style="font-size:20px;"><span style="font-family: georgia,serif;">TesteDeFOnte</span></span></li> </ul> <p>&nbsp;</p>',
competitor_ids: [
62
],
transducer_ids: [
{
id: 22,
optional: false,
technology: null
},
{
id: 392,
optional: false,
technology: null
},
{
id: 332,
optional: true,
technology: null
},
{
id: 342,
optional: true,
technology: null
},
{
id: 302,
optional: true,
technology: null
},
{
id: 252,
optional: false,
technology: null
},
{
id: 322,
optional: true,
technology: null
},
{
id: 352,
optional: true,
technology: null
},
{
id: 222,
optional: true,
technology: null
},
{
id: 232,
optional: true,
technology: null
},
{
id: 132,
optional: false,
technology: null
},
{
id: 172,
optional: true,
technology: null
},
{
id: 192,
optional: true,
technology: null
},
{
id: 212,
optional: true,
technology: null
},
{
id: 202,
optional: true,
technology: null
},
{
id: 512,
optional: true,
technology: null
}
],
software_ids: [
{
id: 162,
optional: false
},
{
id: 102,
optional: false
},
{
id: 132,
optional: true
},
{
id: 262,
optional: true
},
{
id: 112,
optional: false
},
{
id: 122,
optional: true
}
],
exam_ids: [
2,
12,
22,
32,
42,
52,
62,
72,
82,
102,
122,
132,
142,
172,
182,
192,
202,
212,
222,
232,
242,
272,
302,
312,
322,
332,
342,
352
],
image_ids: [ ],
kit_ids: [
352,
362,
372,
382,
392
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 132,
name: "Sparq",
portable: false,
description: "Sparq",
proposal: null,
competitor_ids: [ ],
transducer_ids: [
{
id: 282,
optional: false,
technology: null
},
{
id: 122,
optional: false,
technology: null
},
{
id: 192,
optional: true,
technology: null
}
],
software_ids: [ ],
exam_ids: [
2,
12,
122,
142,
172,
202,
212,
302,
352
],
image_ids: [ ],
kit_ids: [
632,
642,
652,
662
],
document_ids: [ ],
video_ids: [ ]
},
{
id: 142,
name: "CX50 xMATRIX",
portable: true,
description: "Equipamento CX50 xMATRIX",
proposal: null,
competitor_ids: [ ],
transducer_ids: [
{
id: 22,
optional: false,
technology: null
},
{
id: 72,
optional: true,
technology: null
},
{
id: 502,
optional: true,
technology: null
},
{
id: 402,
optional: false,
technology: null
},
{
id: 452,
optional: true,
technology: null
},
{
id: 302,
optional: true,
technology: null
},
{
id: 252,
optional: false,
technology: null
},
{
id: 322,
optional: true,
technology: null
},
{
id: 92,
optional: true,
technology: null
},
{
id: 132,
optional: false,
technology: null
},
{
id: 172,
optional: true,
technology: null
},
{
id: 152,
optional: true,
technology: null
},
{
id: 192,
optional: true,
technology: null
},
{
id: 202,
optional: true,
technology: null
}
],
software_ids: [
{
id: 162,
optional: true
},
{
id: 102,
optional: false
},
{
id: 132,
optional: true
},
{
id: 112,
optional: true
},
{
id: 122,
optional: true
}
],
exam_ids: [
2,
12,
22,
32,
72,
82,
102,
122,
132,
142,
172,
192,
202,
212,
222,
242,
272,
302,
312,
352
],
image_ids: [
192,
202
],
kit_ids: [
582,
592,
602,
612,
622
],
document_ids: [ ],
video_ids: [
22
]
}
],
transducers: [
{
id: 2,
description: "C5-2 (Tipo 1)",
name: "Convexo Adulto (ClearVue)",
code: "Convexo C5-2",
price: null,
exam_ids: [
{
id: 2,
optional: false,
recommended: true
},
{
id: 2,
optional: false,
recommended: false
},
{
id: 2,
optional: false,
recommended: false
},
{
id: 2,
optional: false,
recommended: false
},
{
id: 2,
optional: false,
recommended: false
}
],
equipment_ids: [
2
],
video_ids: [ ]
},
{
id: 12,
description: "Convexo Adulto C5-2 (Tipo 2)",
name: "Convexo Adulto (HD7)",
code: "Convexo. C5-2 ",
price: 1000,
exam_ids: [
{
id: 12,
optional: false,
recommended: true
},
{
id: 12,
optional: false,
recommended: false
},
{
id: 12,
optional: false,
recommended: false
},
{
id: 12,
optional: false,
recommended: false
},
{
id: 12,
optional: false,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 22,
description: "Descrição do transdutor Convexo Adulto (AF 70, CX, EPIQ)",
name: "Convexo Adulto (AF 70, CX, EPIQ)",
code: "Convexo Adulto C5-1",
price: 1000,
exam_ids: [
{
id: 22,
optional: false,
recommended: true
},
{
id: 22,
optional: false,
recommended: false
},
{
id: 22,
optional: false,
recommended: false
},
{
id: 22,
optional: false,
recommended: false
},
{
id: 22,
optional: false,
recommended: false
},
{
id: 22,
optional: false,
recommended: false
}
],
equipment_ids: [
62,
72,
142,
102,
122,
112
],
video_ids: [
2
]
},
{
id: 32,
description: "C6-2",
name: "Convexo Adulto (AF50, AF70, SPARQ)",
code: "Convexo C6-2",
price: 11000,
exam_ids: [
{
id: 32,
optional: false,
recommended: true
},
{
id: 32,
optional: false,
recommended: false
},
{
id: 32,
optional: false,
recommended: false
},
{
id: 32,
optional: false,
recommended: false
},
{
id: 32,
optional: false,
recommended: false
}
],
equipment_ids: [
52
],
video_ids: [ ]
},
{
id: 42,
description: "Convexo C9-2",
name: "Convexo Adulto (AF70, EPIQ)",
code: "Convexo C9-2",
price: 21000,
exam_ids: [
{
id: 42,
optional: true,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
},
{
id: 42,
optional: true,
recommended: false
}
],
equipment_ids: [
2
],
video_ids: [ ]
},
{
id: 52,
description: "Convexo 3D Eletrônico V6-2 (Tipo 1)",
name: "Convexo 3D Volumétrico (CV)",
code: "Convexo Volumetrico. V6-2",
price: 21000,
exam_ids: [
{
id: 52,
optional: true,
recommended: false
},
{
id: 52,
optional: true,
recommended: false
},
{
id: 52,
optional: true,
recommended: false
}
],
equipment_ids: [
62
],
video_ids: [ ]
},
{
id: 62,
description: "Convexo 3D V6-2 (Tipo 2)",
name: "Convexo 3D Volumétrico (Af, EPIQ)",
code: "Convexo Volumetrico V6-2 ",
price: 25000,
exam_ids: [
{
id: 62,
optional: true,
recommended: false
},
{
id: 62,
optional: true,
recommended: true
},
{
id: 62,
optional: false,
recommended: false
},
{
id: 62,
optional: true,
recommended: false
}
],
equipment_ids: [
52
],
video_ids: [ ]
},
{
id: 72,
description: "C9-3io",
name: "Convexo Intraoperatório (CX50)",
code: "Convexo Intraoperatório C9-3io",
price: 25000,
exam_ids: [
{
id: 72,
optional: true,
recommended: false
}
],
equipment_ids: [
72,
142
],
video_ids: [ ]
},
{
id: 82,
description: "C8-5 (Tipo 1)",
name: "Microconvexo (HD7)",
code: "Microconvexo. C8-5 ",
price: 16000,
exam_ids: [
{
id: 82,
optional: true,
recommended: false
},
{
id: 82,
optional: true,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 92,
description: "C8-5 (Tipo 2)",
name: "Microconvexo (AF, CX, EPIQ)",
code: "Microconvexo C8-5",
price: 18000,
exam_ids: [
{
id: 92,
optional: true,
recommended: false
},
{
id: 92,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
72,
142
],
video_ids: [ ]
},
{
id: 102,
description: "S4-1",
name: "Setorial Adulto (ClearVue)",
code: "Setorial Adulto S4-1",
price: null,
exam_ids: [
{
id: 102,
optional: false,
recommended: true
},
{
id: 102,
optional: false,
recommended: false
},
{
id: 102,
optional: false,
recommended: false
}
],
equipment_ids: [
2,
12,
22
],
video_ids: [ ]
},
{
id: 112,
description: "S4-2 (Tipo 1)",
name: "Setorial Adulto (HD7)",
code: "Setorial Adulto. S4-2",
price: null,
exam_ids: [
{
id: 112,
optional: false,
recommended: true
},
{
id: 112,
optional: false,
recommended: false
},
{
id: 112,
optional: false,
recommended: false
},
{
id: 112,
optional: false,
recommended: false
},
{
id: 112,
optional: false,
recommended: false
}
],
equipment_ids: [
32,
42
],
video_ids: [ ]
},
{
id: 122,
description: "S4-2 (Tipo 2)",
name: "Setorial Adulto (AF, Sparq)",
code: "Setorial Adulto S4-2 ",
price: 11000,
exam_ids: [
{
id: 122,
optional: false,
recommended: true
},
{
id: 122,
optional: false,
recommended: false
},
{
id: 122,
optional: false,
recommended: false
},
{
id: 122,
optional: false,
recommended: false
},
{
id: 122,
optional: false,
recommended: false
},
{
id: 122,
optional: false,
recommended: false
}
],
equipment_ids: [
52,
62,
132
],
video_ids: [ ]
},
{
id: 132,
description: "S5-1",
name: "Setorial Adulto (EPIQ, CX50, AF70)",
code: "Setorial Adulto S5-1",
price: null,
exam_ids: [
{
id: 132,
optional: false,
recommended: true
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
},
{
id: 132,
optional: false,
recommended: false
}
],
equipment_ids: [
62,
72,
142,
102,
122,
112
],
video_ids: [ ]
},
{
id: 142,
description: "S8",
name: "Setorial Pediatrico (HD7)",
code: "Setorial Pediatrico S8",
price: 13000,
exam_ids: [
{
id: 142,
optional: true,
recommended: false
},
{
id: 142,
optional: true,
recommended: false
},
{
id: 142,
optional: true,
recommended: true
},
{
id: 142,
optional: true,
recommended: false
}
],
equipment_ids: [
42
],
video_ids: [ ]
},
{
id: 152,
description: "S8-3",
name: "Setorial Pediatrico (AF, EPIQ, CX)",
code: "Setorial Pediatrico S8-3",
price: 18000,
exam_ids: [
{
id: 152,
optional: true,
recommended: false
},
{
id: 152,
optional: true,
recommended: false
},
{
id: 152,
optional: true,
recommended: true
},
{
id: 152,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
72,
142
],
video_ids: [ ]
},
{
id: 162,
description: "S12",
name: "Setorial Neonatal (HD7)",
code: "Setorial Neonatal S12",
price: 13000,
exam_ids: [
{
id: 162,
optional: true,
recommended: true
}
],
equipment_ids: [
42
],
video_ids: [ ]
},
{
id: 172,
description: "S12-4",
name: "Setorial Neonatal (AF, EPIQ, CX)",
code: "Setorial Neonatal S12-4",
price: 18000,
exam_ids: [
{
id: 172,
optional: true,
recommended: true
}
],
equipment_ids: [
52,
62,
72,
142,
102,
122,
112
],
video_ids: [ ]
},
{
id: 182,
description: "T6H",
name: "TEE 2D Adulto (HD7)",
code: "TEE Adulto T6H",
price: 45000,
exam_ids: [
{
id: 182,
optional: true,
recommended: false
}
],
equipment_ids: [
42
],
video_ids: [ ]
},
{
id: 192,
description: "X7-2t (2D)",
name: "TEE 2D Adulto (EPIQ, AF, CX, Sparq)",
code: "TEE Adulto X7-2t (2D)",
price: 61000,
exam_ids: [
{
id: 192,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
62,
72,
142,
102,
122,
112,
132
],
video_ids: [ ]
},
{
id: 202,
description: "TEE 3D Adulto X7-2t (3D)",
name: "TEE 3D Adulto (EPIQ, CX)",
code: "xMatrix TEE Adulto X7-2t (3D)",
price: 61000,
exam_ids: [
{
id: 202,
optional: true,
recommended: false
}
],
equipment_ids: [
142,
122,
112
],
video_ids: [ ]
},
{
id: 212,
description: "S7-3t",
name: "TEE 2D Pediatrico (EPIQ, AF)",
code: "TEE Pediátrico S7-3t",
price: 94000,
exam_ids: [
{
id: 212,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
62,
102,
122,
112
],
video_ids: [ ]
},
{
id: 222,
description: "X5-1",
name: "Setorial 3D Adulto (EPIQ)",
code: "xMatrix Setorial Adulto X5-1",
price: 55000,
exam_ids: [
{
id: 222,
optional: true,
recommended: false
},
{
id: 222,
optional: true,
recommended: false
}
],
equipment_ids: [
122,
112
],
video_ids: [ ]
},
{
id: 232,
description: "X7-2",
name: "Setorial 3D Pediátrico (EPIQ)",
code: "xMatrix Setorial Pediátrico X7-2",
price: 40000,
exam_ids: [
{
id: 232,
optional: true,
recommended: false
}
],
equipment_ids: [
122,
112
],
video_ids: [ ]
},
{
id: 242,
description: "L12-3 (Tipo 1)",
name: "Linear generalista (HD7)",
code: "Linear. L12-3 ",
price: null,
exam_ids: [
{
id: 242,
optional: false,
recommended: true
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
},
{
id: 242,
optional: false,
recommended: false
}
],
equipment_ids: [
32,
42
],
video_ids: [ ]
},
{
id: 252,
description: "L12-3 (Tipo 2)",
name: "Linear generalista (AF70, CX50, EPIQ)",
code: "Linear L12-3 ",
price: 11000,
exam_ids: [
{
id: 252,
optional: false,
recommended: true
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
},
{
id: 252,
optional: false,
recommended: false
}
],
equipment_ids: [
62,
2,
72,
142,
102,
122,
112
],
video_ids: [ ]
},
{
id: 262,
description: "Linear generalista L12-4 (Tipo 1)",
name: "Linear generalista (ClearVue)",
code: "Linear. L12-4 ",
price: null,
exam_ids: [
{
id: 262,
optional: false,
recommended: true
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
},
{
id: 262,
optional: false,
recommended: false
}
],
equipment_ids: [
2,
12,
22
],
video_ids: [ ]
},
{
id: 272,
description: "L12-4 (Tipo 2)",
name: "Linear generalista (AF)",
code: "Linear L12-4 ",
price: 18000,
exam_ids: [
{
id: 272,
optional: false,
recommended: true
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
},
{
id: 272,
optional: false,
recommended: false
}
],
equipment_ids: [
52,
62
],
video_ids: [ ]
},
{
id: 282,
description: "L12-4 (Tipo 3)",
name: "Linear generalista (Sparq)",
code: "Linear.. L12-4",
price: null,
exam_ids: [
{
id: 282,
optional: false,
recommended: true
},
{
id: 282,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
},
{
id: 282,
optional: false,
recommended: false
}
],
equipment_ids: [
132
],
video_ids: [ ]
},
{
id: 292,
description: "L12-5 (Tipo 1)",
name: "Linear de 50mm (HD7)",
code: "Linear 50mm. L12-5",
price: 16000,
exam_ids: [
{
id: 292,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
},
{
id: 292,
optional: true,
recommended: false
}
],
equipment_ids: [
42
],
video_ids: [ ]
},
{
id: 302,
description: "L12-5 (Tipo 2)",
name: "Linear de 50mm (AF, CX, EPIQ)",
code: "Linear 50mm L12-5",
price: 21000,
exam_ids: [
{
id: 302,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
},
{
id: 302,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
62,
72,
142,
102,
122,
112
],
video_ids: [ ]
},
{
id: 312,
description: "15-6L",
name: "Linear Intraoperatório (HD7)",
code: "Linear Intraoperatório 15-6L",
price: 25000,
exam_ids: [
{
id: 312,
optional: true,
recommended: false
},
{
id: 312,
optional: true,
recommended: false
}
],
equipment_ids: [
42
],
video_ids: [ ]
},
{
id: 322,
description: "L15-7io",
name: "Linear Intraoperatório (AF, EPIQ, cx)",
code: "Linear Intraoperatório L15-7io",
price: 18000,
exam_ids: [
{
id: 322,
optional: true,
recommended: false
},
{
id: 322,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
62,
72,
142,
102,
122,
112
],
video_ids: [ ]
},
{
id: 332,
description: "L18-5",
name: "Linear alta frequência (AF, EPIQ)",
code: "Linear L18-5",
price: 18000,
exam_ids: [
{
id: 332,
optional: true,
recommended: false
},
{
id: 332,
optional: true,
recommended: false
},
{
id: 332,
optional: true,
recommended: false
},
{
id: 332,
optional: true,
recommended: false
},
{
id: 332,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
62,
102,
122,
112
],
video_ids: [ ]
},
{
id: 342,
description: "Linear L18-5 (elasto)",
name: "Linear alta frequência elasto (EPIQ)",
code: "Linear. L18-5",
price: 18000,
exam_ids: [
{
id: 342,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
},
{
id: 342,
optional: true,
recommended: false
}
],
equipment_ids: [
102,
122,
112
],
video_ids: [ ]
},
{
id: 352,
description: "VL13-5",
name: "Linear Volumétrico (AF, EPIQ)",
code: "Linear Volumétrico VL13-5",
price: 31000,
exam_ids: [
{
id: 352,
optional: true,
recommended: false
},
{
id: 352,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
62,
102,
122,
112
],
video_ids: [ ]
},
{
id: 362,
description: "C9-4v (Tipo 1)",
name: "Endocavitário (CV)",
code: "Endocavitário. C9-4v ",
price: null,
exam_ids: [
{
id: 362,
optional: false,
recommended: false
},
{
id: 362,
optional: false,
recommended: false
},
{
id: 362,
optional: false,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 372,
description: "C9-4v (Tipo 2)",
name: "Endocavitário (AF, Sparq)",
code: "Endocavitário C9-4v ",
price: null,
exam_ids: [
{
id: 372,
optional: false,
recommended: false
},
{
id: 372,
optional: false,
recommended: false
},
{
id: 372,
optional: false,
recommended: false
},
{
id: 372,
optional: false,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 382,
description: "C8-4v",
name: "Endocavitário (HD7)",
code: "Endocavitário C8-4v",
price: null,
exam_ids: [
{
id: 382,
optional: false,
recommended: false
},
{
id: 382,
optional: false,
recommended: false
},
{
id: 382,
optional: false,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 392,
description: "C10-3v",
name: "Endocavitário (EPIQ, AF70)",
code: "Endocavitário C10-3v",
price: 19000,
exam_ids: [
{
id: 392,
optional: false,
recommended: false
},
{
id: 392,
optional: false,
recommended: false
},
{
id: 392,
optional: false,
recommended: false
}
],
equipment_ids: [
62,
102,
122,
112
],
video_ids: [ ]
},
{
id: 402,
description: "C10-4ec",
name: "Endocavitário (EPIQ, AF)",
code: "Endocavitário C10-4ec",
price: 18000,
exam_ids: [
{
id: 402,
optional: false,
recommended: false
},
{
id: 402,
optional: true,
recommended: false
},
{
id: 402,
optional: true,
recommended: false
},
{
id: 402,
optional: true,
recommended: false
}
],
equipment_ids: [
52,
142
],
video_ids: [ ]
},
{
id: 412,
description: "C10-4ec (fusão)",
name: "Endocavitário Fusão Prostata (EPIQ)",
code: "Endocavitário. C10-4ec",
price: 18000,
exam_ids: [
{
id: 412,
optional: true,
recommended: false
},
{
id: 412,
optional: true,
recommended: false
},
{
id: 412,
optional: true,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 422,
description: "BP10-5ec",
name: "Endocavitário biplanar(AF)",
code: "Endocavitário  biplanar BP10-5ec",
price: 33000,
exam_ids: [ ],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 432,
description: "3D9-3v (Tipo 1)",
name: "Endocavitario Volumétrico (CV)",
code: "Endocavitario Volumétrico 3D9-3v ",
price: 30000,
exam_ids: [
{
id: 432,
optional: true,
recommended: false
},
{
id: 432,
optional: true,
recommended: false
},
{
id: 432,
optional: true,
recommended: false
}
],
equipment_ids: [
2
],
video_ids: [ ]
},
{
id: 442,
description: "3D9-3v (Tipo 2)",
name: "Endocavitario Volumétrico (EPIQ, AF)",
code: "Endocavitario Volumétrico. 3D9-3v ",
price: 39000,
exam_ids: [
{
id: 442,
optional: true,
recommended: false
},
{
id: 442,
optional: true,
recommended: false
},
{
id: 442,
optional: true,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 452,
description: "L10-4lap",
name: "Laparoscópico (CX)",
code: "Laparoscópico L10-4lap",
price: 69000,
exam_ids: [ ],
equipment_ids: [
72,
142
],
video_ids: [ ]
},
{
id: 462,
description: "D5009v",
name: "Doppler Cego 5 MHz (HD7)",
code: "Doppler Cego 5 MHz D5009v",
price: null,
exam_ids: [
{
id: 462,
optional: true,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 472,
description: "D5cwc",
name: "Doppler Cego 5 MHz (EPIQ , AF)",
code: "Doppler Cego 5 MHz D5cwc",
price: null,
exam_ids: [
{
id: 472,
optional: true,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 482,
description: "D1914c",
name: "Doppler Cego 2 MHz (HD7)",
code: "Doppler Cego 2 MHz D1914c",
price: null,
exam_ids: [
{
id: 482,
optional: true,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 492,
description: "D2cwc",
name: "Doppler Cego 2 MHz (AF, EPIQ)",
code: "Doppler Cego 2 MHz. D2cwc",
price: null,
exam_ids: [
{
id: 492,
optional: true,
recommended: false
}
],
equipment_ids: [ ],
video_ids: [ ]
},
{
id: 502,
description: "D2cw",
name: "Doppler Cego 2 MHz (CX)",
code: "Doppler Cego 2 MHz D2cwc",
price: null,
exam_ids: [
{
id: 502,
optional: true,
recommended: false
}
],
equipment_ids: [
142
],
video_ids: [ ]
},
{
id: 512,
description: "xMatrix X6-1",
name: "xMatrix",
code: "xMatrix X6-1",
price: 47000,
exam_ids: [
{
id: 512,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
},
{
id: 512,
optional: true,
recommended: false
}
],
equipment_ids: [
122,
112
],
video_ids: [ ]
}
],
softwares: [
{
id: 2,
name: "M Anatômico",
price: 2000,
equipment_ids: [
52,
2
],
exams_ids: [ ]
},
{
id: 12,
name: "3D Freehand",
price: 4000,
equipment_ids: [
52,
2
],
exams_ids: [
412
]
},
{
id: 22,
name: "iSCAN",
price: 0,
equipment_ids: [
52,
2
],
exams_ids: [ ]
},
{
id: 32,
name: "Doppler iSCAN",
price: 0,
equipment_ids: [
52
],
exams_ids: [ ]
},
{
id: 42,
name: "High-Q",
price: 0,
equipment_ids: [
52
],
exams_ids: [ ]
},
{
id: 52,
name: "Panoramic 2D",
price: 2000,
equipment_ids: [
52
],
exams_ids: [ ]
},
{
id: 62,
name: "Doppler Tecidual (TDI)",
price: 0,
equipment_ids: [
52
],
exams_ids: [ ]
},
{
id: 72,
name: "Harmônica de Pulso Invertido",
price: 0,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 82,
name: "XRES",
price: 0,
equipment_ids: [
112
],
exams_ids: [ ]
},
{
id: 92,
name: "SonoCT",
price: 0,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 102,
name: "IMT",
price: 0,
equipment_ids: [
52,
62,
72,
142,
102,
122,
112,
42
],
exams_ids: [
122
]
},
{
id: 112,
name: "Stress Echo",
price: 0,
equipment_ids: [
52,
62,
72,
142,
102,
122,
112,
42
],
exams_ids: [
82
]
},
{
id: 122,
name: "Stress Echo 3D",
price: 0,
equipment_ids: [
142,
122,
112
],
exams_ids: [ ]
},
{
id: 132,
name: "Mitral Valve Quantification",
price: 10000,
equipment_ids: [
142,
122,
112
],
exams_ids: [
242,
72
]
},
{
id: 142,
name: "4D Obstétrico",
price: 0,
equipment_ids: [ ],
exams_ids: [
232,
412
]
},
{
id: 152,
name: "3DQ GI",
price: 3000,
equipment_ids: [ ],
exams_ids: [
232,
412
]
},
{
id: 162,
name: "3DQ CV",
price: 8000,
equipment_ids: [
142,
122,
112
],
exams_ids: [
242,
412,
72,
62,
52
]
},
{
id: 172,
name: "STIC",
price: 0,
equipment_ids: [ ],
exams_ids: [
232
]
},
{
id: 182,
name: "Strain Cardíaco por Doppler",
price: 0,
equipment_ids: [ ],
exams_ids: [
102
]
},
{
id: 192,
name: "CMQ (Speckle Tracking)",
price: 0,
equipment_ids: [ ],
exams_ids: [
412,
102
]
},
{
id: 202,
name: "CMQ Stress",
price: 7000,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 212,
name: "Interventional Cardiology",
price: 4000,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 222,
name: "Vascular Plaque Quantification",
price: 4000,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 232,
name: "Fetal Heart Navigator",
price: 4000,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 242,
name: "Contraste",
price: 4000,
equipment_ids: [ ],
exams_ids: [
182
]
},
{
id: 252,
name: "ROI",
price: 2500,
equipment_ids: [ ],
exams_ids: [
182
]
},
{
id: 262,
name: "Strain Elastography",
price: 0,
equipment_ids: [
52,
62,
102,
122,
112
],
exams_ids: [
332,
322,
342
]
},
{
id: 272,
name: "Elastografia Shear Wave",
price: 0,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 282,
name: "2DQ",
price: 2000,
equipment_ids: [ ],
exams_ids: [
412
]
},
{
id: 292,
name: "MicroVascular Imaging",
price: 2000,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 302,
name: "Panoramic 3D",
price: 10000,
equipment_ids: [ ],
exams_ids: [ ]
},
{
id: 312,
name: "Fusão e Navegação",
price: 111000,
equipment_ids: [ ],
exams_ids: [
292
]
},
{
id: 322,
name: "Needle Visualization",
price: 0,
equipment_ids: [ ],
exams_ids: [ ]
}
],
kits: [
{
id: 2,
equipment_id: 2,
transductor_count: 0,
price: 62000
},
{
id: 12,
equipment_id: 2,
transductor_count: 1,
price: 67000
},
{
id: 22,
equipment_id: 2,
transductor_count: 2,
price: 72000
},
{
id: 32,
equipment_id: 2,
transductor_count: 3,
price: 77000
},
{
id: 42,
equipment_id: 2,
transductor_count: 4,
price: 88000
},
{
id: 52,
equipment_id: 52,
transductor_count: 0,
price: 120000
},
{
id: 62,
equipment_id: 52,
transductor_count: 1,
price: 125000
},
{
id: 72,
equipment_id: 52,
transductor_count: 2,
price: 130000
},
{
id: 82,
equipment_id: 52,
transductor_count: 3,
price: 135000
},
{
id: 92,
equipment_id: 52,
transductor_count: 4,
price: 146000
},
{
id: 102,
equipment_id: 62,
transductor_count: 0,
price: 162000
},
{
id: 112,
equipment_id: 62,
transductor_count: 1,
price: 168000
},
{
id: 122,
equipment_id: 62,
transductor_count: 2,
price: 174000
},
{
id: 132,
equipment_id: 62,
transductor_count: 3,
price: 180000
},
{
id: 142,
equipment_id: 62,
transductor_count: 4,
price: 195000
},
{
id: 152,
equipment_id: 12,
transductor_count: 0,
price: 71000
},
{
id: 162,
equipment_id: 12,
transductor_count: 1,
price: 76000
},
{
id: 172,
equipment_id: 12,
transductor_count: 2,
price: 81000
},
{
id: 182,
equipment_id: 12,
transductor_count: 3,
price: 86000
},
{
id: 192,
equipment_id: 12,
transductor_count: 4,
price: 97000
},
{
id: 202,
equipment_id: 32,
transductor_count: 0,
price: 70000
},
{
id: 212,
equipment_id: 32,
transductor_count: 1,
price: 75000
},
{
id: 222,
equipment_id: 32,
transductor_count: 2,
price: 80000
},
{
id: 232,
equipment_id: 32,
transductor_count: 3,
price: 85000
},
{
id: 242,
equipment_id: 32,
transductor_count: 4,
price: 96000
},
{
id: 252,
equipment_id: 42,
transductor_count: 0,
price: 74000
},
{
id: 262,
equipment_id: 42,
transductor_count: 1,
price: 79000
},
{
id: 272,
equipment_id: 42,
transductor_count: 2,
price: 84000
},
{
id: 282,
equipment_id: 42,
transductor_count: 3,
price: 89000
},
{
id: 292,
equipment_id: 42,
transductor_count: 4,
price: 100000
},
{
id: 302,
equipment_id: 102,
transductor_count: 0,
price: 220000
},
{
id: 312,
equipment_id: 102,
transductor_count: 1,
price: 235000
},
{
id: 322,
equipment_id: 102,
transductor_count: 2,
price: 250000
},
{
id: 332,
equipment_id: 102,
transductor_count: 3,
price: 265000
},
{
id: 342,
equipment_id: 102,
transductor_count: 4,
price: 283000
},
{
id: 352,
equipment_id: 122,
transductor_count: 0,
price: 270000
},
{
id: 362,
equipment_id: 122,
transductor_count: 1,
price: 285000
},
{
id: 372,
equipment_id: 122,
transductor_count: 2,
price: 300000
},
{
id: 382,
equipment_id: 122,
transductor_count: 3,
price: 315000
},
{
id: 392,
equipment_id: 122,
transductor_count: 4,
price: 333000
},
{
id: 402,
equipment_id: 112,
transductor_count: 0,
price: 270000
},
{
id: 412,
equipment_id: 112,
transductor_count: 1,
price: 285000
},
{
id: 422,
equipment_id: 112,
transductor_count: 2,
price: 300000
},
{
id: 432,
equipment_id: 112,
transductor_count: 3,
price: 315000
},
{
id: 442,
equipment_id: 112,
transductor_count: 4,
price: 333000
},
{
id: 532,
equipment_id: 72,
transductor_count: 0,
price: 120000
},
{
id: 542,
equipment_id: 72,
transductor_count: 1,
price: 130000
},
{
id: 552,
equipment_id: 72,
transductor_count: 2,
price: 140000
},
{
id: 562,
equipment_id: 72,
transductor_count: 3,
price: 150000
},
{
id: 572,
equipment_id: 72,
transductor_count: 4,
price: 168000
},
{
id: 582,
equipment_id: 142,
transductor_count: 0,
price: 175000
},
{
id: 592,
equipment_id: 142,
transductor_count: 1,
price: 185000
},
{
id: 602,
equipment_id: 142,
transductor_count: 2,
price: 195000
},
{
id: 612,
equipment_id: 142,
transductor_count: 3,
price: 205000
},
{
id: 622,
equipment_id: 142,
transductor_count: 4,
price: 223000
},
{
id: 632,
equipment_id: 132,
transductor_count: 0,
price: 107000
},
{
id: 642,
equipment_id: 132,
transductor_count: 1,
price: 111000
},
{
id: 652,
equipment_id: 132,
transductor_count: 2,
price: 115000
},
{
id: 662,
equipment_id: 132,
transductor_count: 3,
price: 119000
},
{
id: 672,
equipment_id: 22,
transductor_count: 0,
price: 79000
},
{
id: 682,
equipment_id: 22,
transductor_count: 1,
price: 84000
},
{
id: 692,
equipment_id: 22,
transductor_count: 2,
price: 89000
},
{
id: 702,
equipment_id: 22,
transductor_count: 3,
price: 94000
},
{
id: 712,
equipment_id: 22,
transductor_count: 4,
price: 105000
}
],
equipment_images: [
{
id: 2,
name: "CV Frontal",
category: "equipment",
image: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_image/image/2/CV350.jpg",
equipment_id: 2
},
{
id: 12,
name: "Affiniti 50",
category: "equipment",
image: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_image/image/12/Epiq_5_qualidade_razoavel.jpg",
equipment_id: 52
},
{
id: 122,
name: "Epiq 5",
category: "equipment",
image: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_image/image/122/Epiq_5_qualidade_razoavel.jpg",
equipment_id: 102
},
{
id: 132,
name: "Epiq 5",
category: "equipment",
image: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_image/image/132/Epiq_5_qualidade_razoavel.jpg",
equipment_id: 102
},
{
id: 142,
name: "Epiq 5",
category: "equipment",
image: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_image/image/142/Epiq_5_qualidade_razoavel.jpg",
equipment_id: 102
},
{
id: 152,
name: "I Clinicia",
category: "clinic",
image: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_image/image/152/1_0015_EP7_C10-3V_GYN_OVARIAN_FOLLICLES.tif",
equipment_id: 102
},
{
id: 192,
name: "cx50",
category: "equipment",
image: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_image/image/192/CX50_CARRINHO_.jpg",
equipment_id: 142
},
{
id: 202,
name: "clinica",
category: "clinic",
image: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_image/image/202/Tela_CX50.tif",
equipment_id: 142
}
],
competitors: [
{
id: 2,
provider_id: 22,
competitor_equipment: "Xario 200",
price_from: null,
price_to: null,
equipment_ids: [
12,
22,
42
]
},
{
id: 12,
provider_id: 22,
competitor_equipment: "Xario 100",
price_from: null,
price_to: null,
equipment_ids: [
2
]
},
{
id: 22,
provider_id: 22,
competitor_equipment: "Nemio MX",
price_from: null,
price_to: null,
equipment_ids: [
32
]
},
{
id: 32,
provider_id: 22,
competitor_equipment: "Aplio 300",
price_from: null,
price_to: null,
equipment_ids: [
52
]
},
{
id: 42,
provider_id: 22,
competitor_equipment: "Aplio 400",
price_from: null,
price_to: null,
equipment_ids: [
62
]
},
{
id: 52,
provider_id: 22,
competitor_equipment: "Aplio 500",
price_from: null,
price_to: null,
equipment_ids: [
102
]
},
{
id: 62,
provider_id: 22,
competitor_equipment: "Artida",
price_from: null,
price_to: null,
equipment_ids: [
122
]
},
{
id: 72,
provider_id: 42,
competitor_equipment: "Sonoace R5",
price_from: null,
price_to: null,
equipment_ids: [
2
]
},
{
id: 82,
provider_id: 42,
competitor_equipment: "Sonoace R5",
price_from: null,
price_to: null,
equipment_ids: [
2,
42
]
},
{
id: 92,
provider_id: 42,
competitor_equipment: "Sonoace R7",
price_from: null,
price_to: null,
equipment_ids: [
12,
42
]
},
{
id: 102,
provider_id: 42,
competitor_equipment: "H60",
price_from: null,
price_to: null,
equipment_ids: [
22
]
},
{
id: 112,
provider_id: 42,
competitor_equipment: "Accuvix XG EK07",
price_from: null,
price_to: null,
equipment_ids: [
52
]
},
{
id: 122,
provider_id: 42,
competitor_equipment: "Accvix A30",
price_from: null,
price_to: null,
equipment_ids: [
62
]
},
{
id: 132,
provider_id: 42,
competitor_equipment: "RS80A WS80A",
price_from: null,
price_to: null,
equipment_ids: [
102
]
},
{
id: 142,
provider_id: 52,
competitor_equipment: "X150",
price_from: null,
price_to: null,
equipment_ids: [
2,
32
]
},
{
id: 152,
provider_id: 52,
competitor_equipment: "X300",
price_from: null,
price_to: null,
equipment_ids: [
12,
42
]
},
{
id: 162,
provider_id: 52,
competitor_equipment: "X300 PE",
price_from: null,
price_to: null,
equipment_ids: [
22
]
},
{
id: 172,
provider_id: 52,
competitor_equipment: "X700",
price_from: null,
price_to: null,
equipment_ids: [
52
]
}
],
provider: [
{
id: 2,
name: "Fornecedor Teste",
competitor_ids: [ ]
},
{
id: 12,
name: "Empresa Teste",
competitor_ids: [ ]
},
{
id: 22,
name: "Toshiba",
competitor_ids: [
2,
12,
22,
32,
42,
52,
62
]
},
{
id: 32,
name: "LG",
competitor_ids: [ ]
},
{
id: 42,
name: "Sansung",
competitor_ids: [
72,
82,
92,
102,
112,
122,
132
]
},
{
id: 52,
name: "Siemens",
competitor_ids: [
142,
152,
162,
172
]
}
],
documents: [ ],
equipment_videos: [
{
id: 22,
title: "xmatrix",
video: "https://agnitio-philips.s3.amazonaws.com/uploads/equipment_video/video/22/transdutor_xmatriz.mp4",
equipment_id: 142
}
],
transducer_videos: [
{
id: 2,
title: "transdutor xmatrix",
video: "https://agnitio-philips.s3.amazonaws.com/uploads/transducer_video/video/2/transdutor_xmatriz.mp4",
transducer_id: 22
}
]
});
