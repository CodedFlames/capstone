const Router = require("express");
const File = require("../models/File");
const route = Router();

route.post("/", (Request, Response) => {
  const newFile = new File(Request.body);
  newFile.save((error, record) => {
    if (error) return Response.status(500).json(error);
    return Response.json(record);
  });
});

route.get("/", (Request, Response) => {
  File.find({}, (error, record) => {
    if (error) return Response.status(500).json(error);
    return Response.json(record);
  });
});

route.get("/:genkey", (Request, Response) => {
  const genkeyval = Request.params.genkey;
  File.find({ genkey: `${genkeyval}` }, (error, record) => {
    if (error) {
      return Response.status(500).json(error);
    } else if (record.length === 0) {
      return Response.status(404).json({ WARNING: "NO VALUES MATCHED" });
    } else if (record[0].opens === record[0].closeAt) {
      File.deleteOne({ genkey: `${genkeyval}` }, (er, re) => {
        if (er) return Response.status(500).json(er);
        return Response.status(403).json({
          WARNING: "MAX OPENS REACHED, FILE DELETED."
        });
      });
    } else {
      let PLUS = record[0].opens + 1;
      File.updateOne(
        { genkey: `${genkeyval}` },
        {
          $set: {
            opens: PLUS
          }
        },
        (E, REC) => {
          if (E) return Response.status(500).json(E);
          return;
        }
      );
      return Response.json(record);
    }
  });
});

route.get(`/WIPE/${process.env.WIPECODE}/TRUE`, (Request, Response) => {
  File.deleteMany({}, (error, record) => {
    if (error) return Response.status(500).json(error);
    return Response.json(record);
  });
}); //debug, take out of final code

module.exports = route;
