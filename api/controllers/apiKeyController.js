
const ApiKeyController = {

  Index: async (req, res) => {
    res.status(200).json({ message: "OK", apiKey: process.env.API_KEY });
  }
  
};

module.exports = ApiKeyController;