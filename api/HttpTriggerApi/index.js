module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  context.res = {
    // status: 200, /* Defaults to 200 */
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      dataType: "jsonp",
      "Acces-Control-Allow-Origin": "*",
      // "Acces-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE",
      // "Access-Control-Allow-Credentials": true,
      // connection: "close",
      // "content-encoding": "gzip",
      // "transfer-encoding": "chunked",
      // vary: "Accept-Encoding",
      // "request-context": "appId=cid-v1:a098b77b-a6dd-477d-8e59-a5c4b8d7407d",
    },
    body: [
      {
        id: "0",
        title: "М-СИ-ЭС КОКА-КОЛА ХХК “ЭНТРЕПРЕНЕР – 2021” ОНЫ ...",
        description:
          "Монгол Улсын нийгэм, эдийн засгийн хөгжилд бодитой хувь нэмэр оруулж буй шилдэг, оны онцлох аж ахуйн нэгж, байгууллагууд,",
        date: "2021.12.30",
      },
      {
        id: "1",
        title: "М-СИ-ЭС КОКА-КОЛА ХХК МОНГОЛ УЛСЫН “ТОП-100 АЖ АХУЙН НЭГЖ”...",
        description:
          "Монгол Улсын Засгийн газар, МҮХАҮТ хамтран 2020 онд улс орныхоо нийгэм, эдийн засгийн хөгжилд бодитой хувь нэмэр оруулж буй ТОП 100 аж ахуй",
        date: "2021.06.28",
      },
      {
        id: "2",
        title: "М-СИ-ЭС КОКА-КОЛА КОМПАНИ ОЛИМПИЙН ХОРООТОЙ ХАМТ...",
        description:
          "М-Си-Эс Кока-Кола компани Олон Улсын Олимпийн өдрөөр хүн төрөлхтний үнэт өв эрдэнэ болох олимпийн соёл, боловсрол, түүхэн хуудсыг залуу...",
        date: "2021.06.23",
      },
      {
        id: "3",
        title: "М-СИ-ЭС КОКА-КОЛА ХХК ХАМТ ОЛОН (COVID-19) ЦАР ТАХЛЫН ЭСРЭГ...",
        description:
          "Коронавируст халдвар COVID-19 цар тахлын эсрэг ард иргэдийнхээ эрүүл, аюулгүй аж төрөх нөхцөлийг хангахаар цаг наргүй ажиллаж байгаа...",
        date: "2021.04.17",
      },
      {
        id: "4",
        title: "М-СИ-ЭС КОКА-КОЛА КОМПАНИ ОЛИМПИЙН ХОРООТОЙ ХАМТ",
        description:
          "М-Си-Эс Кока-Кола компани Олон Улсын Олимпийн өдрөөр хүн төрөлхтний үнэт өв эрдэнэ болох олимпийн соёл, боловсрол, түүхэн хуудсыг залуу хойч үедээ ",
        date: "2021.03.03",
      },
      {
        id: "5",
        title: "М-СИ-ЭС КОКА-КОЛА КОМПАНИ ҮЙЛДВЭРЭЭС ГАРСАН ХУВА ...",
        description:
          "Гуравдугаар сарын 18-ны өдөр “Дэлхийн дахин боловсруулах өдөр” тохиож буйтай холбогдуулан манай компани",
        date: "2021.03.18",
      },
      {
        id: "6",
        title: "MINUTE MAID ЖҮРЖИЙН ТАЛСТ ШИНЭЧЛЭГДЛЭЭ",
        description:
          "MINUTE MAID брэнд хэрэглэгч, харилцагчиддаа зориулж найрлага болон өнгө төрхөө шинэчлэлээ.Та бүхэнд шинэчлэгдсэн Minute Maid Жүржийн талстыг танилцуулж байна.",
        date: "2021.03.12",
      },
      {
        id: "7",
        title: "FANTA БРЭНДИЙН НЭР ТӨРЛҮҮДИЙН ИЛЧЛЭГИЙН ХЭМЖЭЭГ...",
        description:
          "М-Си-Эс Кока-Кола компани нь хэрэглэгчдийн хамгийн ихээр уухыг хүсдэг, чанартай бүтээгдэхүүнүүдийг үйлдвэрлэхийн тулд би...",
        date: "2021.03.10",
      },
      {
        id: "8",
        title: "М-СИ-ЭС КОКА-КОЛА КОМПАНИ ТҮҮХИЙ НҮҮРСИЙГ БҮРЭН ..",
        description:
          "Манай компани түүхий нүүрс шатаадаг технологийг бүрэн халж, хийн түлшээр ажилладаг уурын зуухыг ашиглалтад орууллаа.",
        date: "2021.03.10",
      },
      {
        id: "9",
        title: "М-СИ-ЭС КОКА-КОЛА ХХК АГААРЫН БОХИРДЛЫГ БУУРУУЛ...",
        description:
          "Монгол Улсын Засгийн Газраас хэрэгжүүлж буй “Агаарын бохирдлыг бууруулах талаар авах зарим арга хэмжээний тогтоол”, “Түүхий нүүрс хэрэглэхийг хориглох тухай 62-р тогтоол",
        date: "2021.03.10",
      },
      {
        id: "10",
        title: "SPRITE PLUS ХУДАЛДААНД ГАРЛАА",
        description:
          "M-Cи-Эс Кока-Кола компанийн хамт олон бид хэрэглэгч таны шингэний хэрэгцээг хангахундааны сонголтыг баялаг байлгахыг зо...",
        date: "2020.03.11",
      },
      {
        id: "11",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "12",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "13",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "14",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "15",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "16",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "17",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "18",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "19",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "20",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "21",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "22",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "23",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "24",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "25",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "26",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "27",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "28",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "29",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "30",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "31",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "32",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "33",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "34",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "35",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
      {
        id: "36",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "1999.09.09",
      },
    ],
  };
};
