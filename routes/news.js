import express, { Router } from "express";
const router = express.Router();
const returnSuccess = { success: true };

const newsCategories = [
  {
    id: "1",
    img: "../../img/News/e56229aa42616b0169df584809b64db2.jpeg",
    title: "М-СИ-ЭС КОКА-КОЛА ХХК “ЭНТРЕПРЕНЕР – 2021” ОНЫ ...",
    description:
      "Монгол Улсын нийгэм, эдийн засгийн хөгжилд бодитой хувь нэмэр оруулж буй шилдэг, оны онцлох аж ахуйн нэгж, байгууллагууд,",
    date: "2021.12.30",
  },
  {
    id: "2",
    img: "../../img/News/medee2.jpg",
    title: "М-СИ-ЭС КОКА-КОЛА ХХК МОНГОЛ УЛСЫН “ТОП-100 АЖ АХУЙН НЭГЖ”...",
    description:
      "Монгол Улсын Засгийн газар, МҮХАҮТ хамтран 2020 онд улс орныхоо нийгэм, эдийн засгийн хөгжилд бодитой хувь нэмэр оруулж буй ТОП 100 аж ахуй",
    date: "2021.06.28",
  },
  {
    id: "3",
    img: "../../img/News/medee3.jpg",
    title: "М-СИ-ЭС КОКА-КОЛА КОМПАНИ ОЛИМПИЙН ХОРООТОЙ ХАМТ...",
    description:
      "М-Си-Эс Кока-Кола компани Олон Улсын Олимпийн өдрөөр хүн төрөлхтний үнэт өв эрдэнэ болох олимпийн соёл, боловсрол, түүхэн хуудсыг залуу...",
    date: "2021.06.23",
  },
  {
    id: "4",
    img: "../../img/News/medee4.jpg",
    title: "М-СИ-ЭС КОКА-КОЛА ХХК ХАМТ ОЛОН (COVID-19) ЦАР ТАХЛЫН ЭСРЭГ...",
    description:
      "Коронавируст халдвар COVID-19 цар тахлын эсрэг ард иргэдийнхээ эрүүл, аюулгүй аж төрөх нөхцөлийг хангахаар цаг наргүй ажиллаж байгаа...",
    date: "2021.04.17",
  },
  {
    id: "5",
    img: "../../img/News/medee5.jpg",
    title: "М-СИ-ЭС КОКА-КОЛА КОМПАНИ ОЛИМПИЙН ХОРООТОЙ ХАМТ",
    description:
      "М-Си-Эс Кока-Кола компани Олон Улсын Олимпийн өдрөөр хүн төрөлхтний үнэт өв эрдэнэ болох олимпийн соёл, боловсрол, түүхэн хуудсыг залуу хойч үедээ ",
    date: "2021.03.03",
  },
  {
    id: "6",
    img: "../../img/News/medee6.jpg",
    title: "М-СИ-ЭС КОКА-КОЛА КОМПАНИ ҮЙЛДВЭРЭЭС ГАРСАН ХУВА ...",
    description:
      "Гуравдугаар сарын 18-ны өдөр “Дэлхийн дахин боловсруулах өдөр” тохиож буйтай холбогдуулан манай компани",
    date: "2021.03.18",
  },
  {
    id: "7",
    img: "../../img/News/medee7.jpg",
    title: "MINUTE MAID ЖҮРЖИЙН ТАЛСТ ШИНЭЧЛЭГДЛЭЭ",
    description:
      "MINUTE MAID брэнд хэрэглэгч, харилцагчиддаа зориулж найрлага болон өнгө төрхөө шинэчлэлээ.Та бүхэнд шинэчлэгдсэн Minute Maid Жүржийн талстыг танилцуулж байна.",
    date: "2021.03.12",
  },
  {
    id: "8",
    img: "../../img/News/medee8.jpg",
    title: "FANTA БРЭНДИЙН НЭР ТӨРЛҮҮДИЙН ИЛЧЛЭГИЙН ХЭМЖЭЭГ...",
    description:
      "М-Си-Эс Кока-Кола компани нь хэрэглэгчдийн хамгийн ихээр уухыг хүсдэг, чанартай бүтээгдэхүүнүүдийг үйлдвэрлэхийн тулд би...",
    date: "2021.03.10",
  },
  {
    id: "9",
    img: "../../img/News/medee9.jpg",
    title: "М-СИ-ЭС КОКА-КОЛА КОМПАНИ ТҮҮХИЙ НҮҮРСИЙГ БҮРЭН ..",
    description:
      "Манай компани түүхий нүүрс шатаадаг технологийг бүрэн халж, хийн түлшээр ажилладаг уурын зуухыг ашиглалтад орууллаа.",
    date: "2021.03.10",
  },
  {
    id: "10",
    img: "../../img/News/medee10.png",
    title: "М-СИ-ЭС КОКА-КОЛА ХХК АГААРЫН БОХИРДЛЫГ БУУРУУЛ...",
    description:
      "Монгол Улсын Засгийн Газраас хэрэгжүүлж буй “Агаарын бохирдлыг бууруулах талаар авах зарим арга хэмжээний тогтоол”, “Түүхий нүүрс хэрэглэхийг хориглох тухай 62-р тогтоол",
    date: "2021.03.10",
  },
];

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get("/", (req, res) => {
  res.send(newsCategories);
});

router.post("/medeepost", (req, res) => {
  console.log(req.body.newsCategories);
  newsCategories.push({
    id: newsCategories.length + 1,
    img: req.body.newsCategories.img,
    title: req.body.newsCategories,
    description: req.body.newsCategories.description,
    date: req.body.newsCategories.date,
  });
  res.status(201).send(returnSuccess);
});

router.get("/:id", (req, res) => {
  res.status(200).send(returnSuccess);
});

export default router;
