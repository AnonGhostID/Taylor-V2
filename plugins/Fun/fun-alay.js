function handler(m, { text }) {
  let teks = text || (m.quoted && m.quoted?.text ? m.quoted?.text : m.text);
  m.reply(
    teks
      .replace(/[a-z]/gi, (v) =>
        Math.random() > 0.5
          ? v[["toLowerCase", "toUpperCase"][Math.floor(2 * Math.random())]]()
          : v,
      )
      .replace(/[abegiors]/gi, (v) => {
        if (Math.random() > 0.5) return v;
        switch (v.toLowerCase()) {
          case "a":
            return "4";
          case "b":
            return Math.random() > 0.5 ? "8" : "13";
          case "e":
            return "3";
          case "g":
            return Math.random() > 0.5 ? "6" : "9";
          case "i":
            return "1";
          case "o":
            return "0";
          case "r":
            return "12";
          case "s":
            return "5";
        }
      }),
  );
}
(handler.help = ["alay"].map((v) => v + " <text>")),
  (handler.tags = ["fun"]),
  (handler.command = ["alay"]);
export default handler;
