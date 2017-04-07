exports.faceStyles = function(req, res) {
    var context = {
        ariantF: [
            {name: "Look of Death", image: "lookofdeath1"},
            {name: "Defiant Face", image: "defiantface1"},
            {name: "Intelligent Face", image: "intelligentface1"},
            {name: "Strong Stare", image: "strongstare1"},
            {name: "Pucker Up Face", image: "puckerupface1"},
            {name: "Soul's Window", image: "soulswindow1"}
        ],
        henesysF: [
            {name: "Defiant Face", image: "defiantface1"},
            {name: "Prudent Face", image: "prudentface1"},
            {name: "Intelligent Face", image: "intelligentface1"},
            {name: "Strong Stare", image: "strongstare1"}
        ]
    };
    context.title = "MapleNow - Plastic Surgery";
    res.render('face', context);
}
