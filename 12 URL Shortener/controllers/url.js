const URL = require('../models/url');
const shortid = require('shortid');

async function generateNewShortURL(req,res) {
    const body = req.body ;
    if(!body.url) {
        return res.status(400).json({ error: "Url Is Requried" });
    }
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitsHistory: [],
    });
    return res.render('home', {
        id : shortID ,
    });
};


async function getVisitedHistory(req,res) {
    let shortId = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },{
        $push: {
            visitsHistory: {
                timestamps: Date.now(),
            },
        },
    });
    res.redirect(entry.redirectUrl);
}


async function getAnalytics(req,res) {
    const shortId = req.params.shortId ;
    const result = await URL.findOne({ shortId });
    return  res.json({ 
        totalClicks : result.visitsHistory.length ,
        analytics: result.visitsHistory,
     });
};


module.exports = {
    generateNewShortURL,
    getAnalytics,
    getVisitedHistory,
};

