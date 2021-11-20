import { http, idList } from "../../../../httpConfig";

describe("Cards:", () => {
  const cardName = "test_card";
  let cardData: any;

  beforeEach(() => {
    http("POST", "/1/cards", {
      idList,
      name: cardName,
    }).then(({ body }) => (cardData = body));
  });

  afterEach(() => {
    http("GET", `/1/cards/${cardData.id}`, {}, false);
  });

  describe("Card actions:", () => {
    it("should delete card", () => {
      http("DELETE", `/1/cards/${cardData.id}`).then(({ body, status }) => {
        expect(status).equal(200);
        expect(body).property("limits").exist;
      });
    });

    it("should get card info", () => {
      http("GET", `/1/cards/${cardData.id}`).then(({ body, status }) => {
        expect(body.name).contains(cardName);
        expect(Object.keys(body).length).equal(31);
        expect(status).equal(200);
      });
    });

    it("should update card name", () => {
      const newCardName = "new_name";

      http("PUT", `/1/cards/${cardData.id}`, {
        name: newCardName,
      }).then(({ body, status }) => {
        expect(body.name).equal(newCardName);
        expect(Object.keys(body).length).equal(31);
        expect(status).equal(200);
      });
    });

    it("should create new card", () => {
      expect(cardData.name).equal(cardName);
      expect(Object.keys(cardData).length).equal(34);
    });
  });
});
