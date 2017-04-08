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
            {name: "Wide-Eyed Girl", image: "wideeyedgirl1"},
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
        ],
        mulungF: [
            {name: "Hypnotized Look", image: "hypnotizedlook1"},
            {name: "Defiant Face", image: "defiantface1"},
            {name: "Intelligent Face", image: "intelligentface1"},
            {name: "Strong Stare", image: "strongstare1"},
            {name: "Babyface Pout", image: "babyfacepout1"},
            {name: "Pucker Up Face", image: "puckerupface1"},
            {name: "Hopeless Gaze", image: "hopelessgaze1"},
            {name: "Soul's Window", image: "soulswindow1"},
            {name: "Look Of Death", image: "lookofdeath1"},
            {name: "Innocent Look", image: "innocentlook1"},
            {name: "Tender Love", image: "tenderlove1"}
        ],
        edelF: [
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
            {name: "Beauty Stare", image: "beautystare1"},
            {name: "Gentle Glow", image: "gentleglow1"},
            {name: "Demure Poise Eyes", image: "demurepoiseeyes1"},
            {name: "Wide-Eyed Girl", image: "wideeyedgirl1"},
            {name: "Compassion Look", image: "compassionlook1"},
            {name: "Innocent Look", image: "innocentlook1"},
            {name: "Lazy Look", image: "lazylook1"},
            {name: "Tender Love", image: "tenderlove1"},
            {name: "Glamorous Edge", image: "glamorousedge1"},
            {name: "Kitty Cat", image: "kittycat1"}
        ],
        showaF: [
            {name: "Compassion Look", image: "compassionlook1"},
            {name: "Defiant Face", image: "defiantface1"},
            {name: "Intelligent Face", image: "intelligentface1"},
            {name: "Strong Stare", image: "strongstare1"},
            {name: "Pucker Up Face", image: "puckerupface1"},
            {name: "Soul's Window", image: "soulswindow1"}
        ],
        cbdF: [
            {name: "Compassion Look", image: "compassionlook1"},
            {name: "Hypnotized Look", image: "hypnotizedlook1"},
            {name: "Look of Death", image: "lookofdeath1"},
            {name: "Shuteye", image: "shuteye1"},
            {name: "Pucker Up Face", image: "puckerupface1"},
            {name: "Soul's Window", image: "soulswindow1"}
        ]
    };
    context.title = "MapleNow - Plastic Surgery";
    res.render('face', context);
}
