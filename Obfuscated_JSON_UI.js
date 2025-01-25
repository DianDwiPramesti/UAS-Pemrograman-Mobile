
(function(){
  var _0x1234 = ["data", "attributes", "title", "relationships", "author", "comments", "type", "id", "innerText", "appendChild", "createElement", "getElementById"];
  const jsonData = {
    "data": {
      "type": "articles",
      "id": "1",
      "attributes": {
        "title": "JSON:API paints my bikeshed!"
      },
      "relationships": {
        "author": {
          "data": {
            "type": "people",
            "id": "9"
          }
        },
        "comments": {
          "data": [
            {"type": "comments", "id": "5"},
            {"type": "comments", "id": "12"}
          ]
        }
      }
    }
  };
  document[_0x1234[11]]("title")[_0x1234[8]] = jsonData[_0x1234[0]][_0x1234[1]][_0x1234[2]];
  document[_0x1234[11]]("author")[_0x1234[8]] = jsonData[_0x1234[0]][_0x1234[3]][_0x1234[4]]["data"][_0x1234[7]];
  const commentsList = document[_0x1234[11]]("comments");
  jsonData[_0x1234[0]][_0x1234[3]][_0x1234[5]]["data"].forEach(comment => {
    const li = document[_0x1234[10]]("li");
    li[_0x1234[8]] = `Comment ID: ${comment[_0x1234[7]]}`;
    commentsList[_0x1234[9]](li);
  });
})();
