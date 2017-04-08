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
            {name: "Strong Stare", image: "strongstare1"},
            {name: "Angel Glow", image: "angelglow1"},
            {name: "Babyface Pout", image: "babyfacepout1"},
            {name: "Pucker Up Face", image: "puckerupface1"},
            {name: "Dollface Look", image: "dollfacelook1"},
            {name: "Hopeless Gaze", image: "hopelessgaze1"},
            {name: "Soul's Window", image: "soulswindow1"},
            {name: "Curious Look", image: "curiouslook1"},
            {name: "Wide-eyed Girl", image: "wideeyedgirl1"},
            {name: "Innocent Look", image: "innocentlook1"},
            {name: "Tender Love", image: "tenderlove1"}
        ],
        nlcF: [
            {name: "Beauty Stare", image: "beautystare1"},
            {name: "Prudent Face", image: "prudentface1"},
            {name: "Intelligent Face", image: "intelligentface1"},
            {name: "Strong Stare", image: "strongstare1"},
            {name: "Angel Glow", image: "angelglow1"},
            {name: "Babyface Pout", image: "babyfacepout1"},
            {name: "Pucker Up Face", image: "puckerupface1"},
            {name: "Hopeless Gaze", image: "hopelessgaze1"},
            {name: "Soul's Window", image: "soulswindow1"}
        ],
        orbisF: [
            {name: "Defiant Face", image: "defiantface1"},
            {name: "Prudent Face", image: "prudentface1"},
            {name: "Intelligent Face", image: "intelligentface1"},
            {name: "Strong Stare", image: "strongstare1"},
            {name: "Angel Glow", image: "angelglow1"},
            {name: "Babyface Pout", image: "babyfacepout1"},
            {name: "Pucker Up Face", image: "puckerupface1"},
            {name: "Dollface Look", image: "dollfacelook1"},
            {name: "Hopeless Gaze", image: "hopelessgaze1"},
            {name: "Soul's Window", image: "soulswindow1"},
            {name: "Curious Look", image: "curiouslook1"},
            {name: "Innocent Look", image: "innocentlook1"},
            {name: "Tender Love", image: "tenderlove1"}
        ],
        ludiF: [
            {name: "Defiant Face", image: "defiantface1"},
            {name: "Prudent Face", image: "prudentface1"},
            {name: "Intelligent Face", image: "intelligentface1"},
            {name: "Strong Stare", image: "strongstare1"},
            {name: "Angel Glow", image: "angelglow1"},
            {name: "Babyface Pout", image: "babyfacepout1"},
            {name: "Pucker Up Face", image: "puckerupface1"},
            {name: "Dollface Look", image: "dollfacelook1"},
            {name: "Hopeless Gaze", image: "hopelessgaze1"},
            {name: "Soul's Window", image: "soulswindow1"},
            {name: "Curious Look", image: "curiouslook1"},
            {name: "Wisdom Glance", image: "wisdomgaze1"}
        ]
    };
    context.title = "MapleNow - Plastic Surgery";
    res.render('face', context);
}
