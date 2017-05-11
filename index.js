$(document).ready(function() {
  var Scales = [
    {
      index: "0",
      key: "C Major",
      scale: "C D E F G A B C",
      root: "C",
      second: "D",
      third: "E",
      fourth: "F",
      fifth: "G",
      sixth: "A",
      seventh: "B"
    },
    {
      index: "1",
      key: "D Major",
      scale: "D E F# G A B C# D",
      root: "D",
      second: "E",
      third: "F#",
      fourth: "G",
      fifth: "A",
      sixth: "B",
      seventh: "C#"
    },
    {
      index: "2",
      key: "E Major",
      scale: "E F# G# A B C# D# E",
      root: "E",
      second: "F#",
      third: "G#",
      fourth: "A",
      fifth: "B",
      sixth: "C#",
      seventh: "D#"
    },
    {
      index: "3",
      key: "F Major",
      scale: "F G A Bb C D E F",
      root: "F",
      second: "G",
      third: "A",
      fourth: "Bb",
      fifth: "C",
      sixth: "D",
      seventh: "E"
    },
    {
      index: "4",
      key: "G Major",
      scale: "G A B C D E F# G",
      root: "G",
      second: "A",
      third: "B",
      fourth: "C",
      fifth: "D",
      sixth: "E",
      seventh: "F#"
    },
    {
      index: "5",
      key: "A Major",
      scale: "A B C# D E F# G# A",
      root: "A",
      second: "B",
      third: "C#",
      fourth: "D",
      fifth: "E",
      sixth: "F#",
      seventh: "G#"
    },
    {
      index: "6",
      key: "B Major",
      scale: "B C# D# E F# G# A# B",
      root: "B",
      second: "C#",
      third: "D#",
      fourth: "E",
      fifth: "F#",
      sixth: "G#",
      seventh: "A#"
    },
    {
      index: "7",
      key: "C# Major",
      scale: "C# D# E# F# G# A# B# C#",
      root: "C#",
      second: "D#",
      third: "E#",
      fourth: "F#",
      fifth: "G#",
      sixth: "A#",
      seventh: "B#"
    },
    {
      index: "8",
      key: "F# Major",
      scale: "F# G# A# B C# D# E# F#",
      root: "F#",
      second: "G#",
      third: "A#",
      fourth: "B",
      fifth: "C#",
      sixth: "D#",
      seventh: "E#"
    },
    {
      index: "9",
      key: "Gb Major",
      scale: "Gb Ab Bb Cb Db Eb F Gb",
      root: "Gb",
      second: "Ab",
      third: "Bb",
      fourth: "Cb",
      fifth: "Db",
      sixth: "Eb",
      seventh: "F"
    },
    {
      index: "10",
      key: "Ab Major",
      scale: "Ab Bb C Db Eb F G Ab",
      root: "Ab",
      second: "Bb",
      third: "C",
      fourth: "Db",
      fifth: "Eb",
      sixth: "F",
      seventh: "G"
    },
    {
      index: "11",
      key: "Bb Major",
      scale: "Bb C D Eb F G A Bb",
      root: "Bb",
      second: "C",
      third: "D",
      fourth: "Eb",
      fifth: "F",
      sixth: "G",
      seventh: "A"
    },
    {
      index: "12",
      key: "Cb Major",
      scale: "Cb Db Eb Fb Gb Ab Bb Cb",
      root: "Cb",
      second: "Db",
      third: "Eb",
      fourth: "Fb",
      fifth: "Gb",
      sixth: "Ab",
      seventh: "Bb"
    },
    {
      index: "13",
      key: "Db Major",
      scale: "Db Eb F Gb Ab Bb C Db",
      root: "Db",
      second: "Eb",
      third: "F",
      fourth: "Gb",
      fifth: "Ab",
      sixth: "Bb",
      seventh: "C"
    },
    {
      index: "14",
      key: "Eb Major",
      scale: "Eb F G Ab Bb C D Eb",
      root: "Eb",
      second: "F",
      third: "G",
      fourth: "Ab",
      fifth: "Bb",
      sixth: "C",
      seventh: "D"
    }
  ];
  var clickCount = 0;

  function getChord() {
    if (clickCount === 0) {
      $("#iButton").html("I Chord");
      $("#Root").html("Root");
      $("#Third").html("3rd");
      $("#Fifth").html("5th");
    } else if (clickCount === 1) {
      $("#iButton").html("1st Inversion");
      $("#Root").html("3rd");
      $("#Third").html("5th");
      $("#Fifth").html("Root");
    } else if (clickCount === 2) {
      $("#iButton").html("2nd Inversion");
      $("#Root").html("5th");
      $("#Third").html("Root");
      $("#Fifth").html("3rd");
    } else if (clickCount >= 3) {
      clickCount = 0;
      getChord();
    }
  }
  $("#iButton").click(function() {
    clickCount++;
    getChord();
  });

  var iiclickCount = 0;

  function getiiChord() {
    if (iiclickCount === 0) {
      $("#iiButton").html("ii Chord");
      $("#iiRoot").html("2nd");
      $("#iiThird").html("4th");
      $("#iiFifth").html("6th");
    } else if (iiclickCount === 1) {
      $("#iiButton").html("1st Inversion");
      $("#iiRoot").html("4th");
      $("#iiThird").html("6th");
      $("#iiFifth").html("2nd");
    } else if (iiclickCount === 2) {
      $("#iiButton").html("2nd Inversion");
      $("#iiRoot").html("6th");
      $("#iiThird").html("2nd");
      $("#iiFifth").html("4th");
    } else if (iiclickCount >= 3) {
      iiclickCount = 0;
      getiiChord();
    }
  }
  $("#iiButton").click(function() {
    iiclickCount++;
    getiiChord();
  });

  var iiiclickCount = 0;

  function getiiiChord() {
    if (iiiclickCount === 0) {
      $("#iiiButton").html("iii Chord");
      $("#iiiRoot").html("3rd");
      $("#iiiThird").html("5th");
      $("#iiiFifth").html("7th");
    } else if (iiiclickCount === 1) {
      $("#iiiButton").html("1st Inversion");
      $("#iiiRoot").html("5th");
      $("#iiiThird").html("7th");
      $("#iiiFifth").html("3rd");
    } else if (iiiclickCount === 2) {
      $("#iiiButton").html("2nd Inversion");
      $("#iiiRoot").html("7th");
      $("#iiiThird").html("3rd");
      $("#iiiFifth").html("5th");
    } else if (iiiclickCount >= 3) {
      iiiclickCount = 0;
      getiiiChord();
    }
  }
  $("#iiiButton").click(function() {
    iiiclickCount++;
    getiiiChord();
  });

  var ivclickCount = 0;

  function getivChord() {
    if (ivclickCount === 0) {
      $("#ivButton").html("IV Chord");
      $("#ivRoot").html("4th");
      $("#ivThird").html("6th");
      $("#ivFifth").html("Root");
    } else if (ivclickCount === 1) {
      $("#ivButton").html("1st Inversion");
      $("#ivRoot").html("6th");
      $("#ivThird").html("Root");
      $("#ivFifth").html("4th");
    } else if (ivclickCount === 2) {
      $("#ivButton").html("2nd Inversion");
      $("#ivRoot").html("Root");
      $("#ivThird").html("4th");
      $("#ivFifth").html("6th");
    } else if (ivclickCount >= 3) {
      ivclickCount = 0;
      getivChord();
    }
  }
  $("#ivButton").click(function() {
    ivclickCount++;
    getivChord();
  });

  var vclickCount = 0;

  function getvChord() {
    if (vclickCount === 0) {
      $("#vButton").html("V Chord");
      $("#vRoot").html("5th");
      $("#vThird").html("7th");
      $("#vFifth").html("2nd");
    } else if (vclickCount === 1) {
      $("#vButton").html("1st Inversion");
      $("#vRoot").html("7th");
      $("#vThird").html("2nd");
      $("#vFifth").html("5th");
    } else if (vclickCount === 2) {
      $("#vButton").html("2nd Inversion");
      $("#vRoot").html("2nd");
      $("#vThird").html("5th");
      $("#vFifth").html("7th");
    } else if (vclickCount >= 3) {
      vclickCount = 0;
      getvChord();
    }
  }
  $("#vButton").click(function() {
    vclickCount++;
    getvChord();
  });

  var viclickCount = 0;

  function getviChord() {
    if (viclickCount === 0) {
      $("#viButton").html("vi Chord");
      $("#viRoot").html("6th");
      $("#viThird").html("Root");
      $("#viFifth").html("3rd");
    } else if (viclickCount === 1) {
      $("#viButton").html("1st Inversion");
      $("#viRoot").html("Root");
      $("#viThird").html("3rd");
      $("#viFifth").html("6th");
    } else if (viclickCount === 2) {
      $("#viButton").html("2nd Inversion");
      $("#viRoot").html("3rd");
      $("#viThird").html("6th");
      $("#viFifth").html("Root");
    } else if (viclickCount >= 3) {
      viclickCount = 0;
      getviChord();
    }
  }
  $("#viButton").click(function() {
    viclickCount++;
    getviChord();
  });

  var cCFrets = 0;

  function getFrets() {
    if (cCFrets === 0) {
      $("#guitarTitle").html("Guitar Fret Board");
      $("#guitarFretBoard").attr(
        "src",
        "#"
      );
    } else if (cCFrets === 1) {
      $("#guitarTitle").html("Bass Fret Board");
      $("#guitarFretBoard").attr(
        "src",
        "#"
      );
    } else if (cCFrets > 1) {
      cCFrets = 0;
      getFrets();
    }
  }
  $("#guitarTitle").click(function() {
    cCFrets++;
    getFrets();
  });

  function getKey(num) {
    $("#Key").html(Scales[num].key);
    $("#scaleView").html(Scales[num].scale);
    $("#Root").html(Scales[num].root);
    $("#Third").html(Scales[num].third);
    $("#Fifth").html(Scales[num].fifth);
    $("#iiRoot").html(Scales[num].second);
    $("#iiThird").html(Scales[num].fourth);
    $("#iiFifth").html(Scales[num].sixth);
    $("#iiiRoot").html(Scales[num].third);
    $("#iiiThird").html(Scales[num].fifth);
    $("#iiiFifth").html(Scales[num].seventh);
    $("#ivRoot").html(Scales[num].fourth);
    $("#ivThird").html(Scales[num].sixth);
    $("#ivFifth").html(Scales[num].root);
    $("#vRoot").html(Scales[num].fifth);
    $("#vThird").html(Scales[num].seventh);
    $("#vFifth").html(Scales[num].second);
    $("#viRoot").html(Scales[num].sixth);
    $("#viThird").html(Scales[num].root);
    $("#viFifth").html(Scales[num].third);
    $("#iButton").html(Scales[num].root + " Major");
    $("#iiButton").html(Scales[num].second + " minor");
    $("#iiiButton").html(Scales[num].third + " minor");
    $("#ivButton").html(Scales[num].fourth + " Major");
    $("#vButton").html(Scales[num].fifth + " Major");
    $("#viButton").html(Scales[num].sixth + " minor");
    var iCount = 0;
    function iButton() {
      if (iCount === 0) {
        $("#iButton").html(Scales[num].root + " Major");
        $("#Root").html(Scales[num].root);
        $("#Third").html(Scales[num].third);
        $("#Fifth").html(Scales[num].fifth);
      } else if (iCount === 1) {
        $("#iButton").html(
          Scales[num].root + "/" + Scales[num].third + " Major"
        );
        $("#Root").html(Scales[num].third);
        $("#Third").html(Scales[num].fifth);
        $("#Fifth").html(Scales[num].root);
      } else if (iCount === 2) {
        $("#iButton").html(
          Scales[num].root + "/" + Scales[num].fifth + " Major"
        );
        $("#Root").html(Scales[num].fifth);
        $("#Third").html(Scales[num].root);
        $("#Fifth").html(Scales[num].third);
      } else {
        iCount = 0;
        iButton();
      }
    }

    $("#iButton").click(function() {
      iCount++;
      iButton();
    });

    var iiCount = 0;
    function iiButton() {
      if (iiCount === 0) {
        $("#iiButton").html(Scales[num].second + " minor");
        $("#iiRoot").html(Scales[num].second);
        $("#iiThird").html(Scales[num].fourth);
        $("#iiFifth").html(Scales[num].sixth);
      } else if (iiCount === 1) {
        $("#iiButton").html(
          Scales[num].second + "/" + Scales[num].fourth + " minor"
        );
        $("#iiRoot").html(Scales[num].fourth);
        $("#iiThird").html(Scales[num].sixth);
        $("#iiFifth").html(Scales[num].second);
      } else if (iiCount === 2) {
        $("#iiButton").html(
          Scales[num].second + "/" + Scales[num].sixth + " minor"
        );
        $("#iiRoot").html(Scales[num].sixth);
        $("#iiThird").html(Scales[num].second);
        $("#iiFifth").html(Scales[num].fourth);
      } else {
        iiCount = 0;
        iiButton();
      }
    }

    $("#iiButton").click(function() {
      iiCount++;
      iiButton();
    });

    var iiiCount = 0;
    function iiiButton() {
      if (iiiCount === 0) {
        $("#iiiButton").html(Scales[num].third + " minor");
        $("#iiiRoot").html(Scales[num].third);
        $("#iiiThird").html(Scales[num].fifth);
        $("#iiiFifth").html(Scales[num].seventh);
      } else if (iiiCount === 1) {
        $("#iiiButton").html(
          Scales[num].third + "/" + Scales[num].fifth + " minor"
        );
        $("#iiiRoot").html(Scales[num].fifth);
        $("#iiiThird").html(Scales[num].seventh);
        $("#iiiFifth").html(Scales[num].third);
      } else if (iiiCount === 2) {
        $("#iiiButton").html(
          Scales[num].third + "/" + Scales[num].seventh + " minor"
        );
        $("#iiiRoot").html(Scales[num].seventh);
        $("#iiiThird").html(Scales[num].third);
        $("#iiiFifth").html(Scales[num].fifth);
      } else {
        iiiCount = 0;
        iiiButton();
      }
    }

    $("#iiiButton").click(function() {
      iiiCount++;
      iiiButton();
    });

    var ivCount = 0;
    function ivButton() {
      if (ivCount === 0) {
        $("#ivButton").html(Scales[num].fourth + " Major");
        $("#ivRoot").html(Scales[num].fourth);
        $("#ivThird").html(Scales[num].sixth);
        $("#ivFifth").html(Scales[num].root);
      } else if (ivCount === 1) {
        $("#ivButton").html(
          Scales[num].fourth + "/" + Scales[num].sixth + " Major"
        );
        $("#ivRoot").html(Scales[num].sixth);
        $("#ivThird").html(Scales[num].root);
        $("#ivFifth").html(Scales[num].fourth);
      } else if (ivCount === 2) {
        $("#ivButton").html(
          Scales[num].fourth + "/" + Scales[num].root + " Major"
        );
        $("#ivRoot").html(Scales[num].root);
        $("#ivThird").html(Scales[num].fourth);
        $("#ivFifth").html(Scales[num].sixth);
      } else {
        ivCount = 0;
        ivButton();
      }
    }

    $("#ivButton").click(function() {
      ivCount++;
      ivButton();
    });

    var vCount = 0;
    function vButton() {
      if (vCount === 0) {
        $("#vButton").html(Scales[num].fifth + " Major");
        $("#vRoot").html(Scales[num].fifth);
        $("#vThird").html(Scales[num].seventh);
        $("#vFifth").html(Scales[num].second);
      } else if (vCount === 1) {
        $("#vButton").html(
          Scales[num].fifth + "/" + Scales[num].seventh + " Major"
        );
        $("#vRoot").html(Scales[num].seventh);
        $("#vThird").html(Scales[num].second);
        $("#vFifth").html(Scales[num].fifth);
      } else if (vCount === 2) {
        $("#vButton").html(
          Scales[num].fifth + "/" + Scales[num].second + " Major"
        );
        $("#vRoot").html(Scales[num].second);
        $("#vThird").html(Scales[num].fifth);
        $("#vFifth").html(Scales[num].seventh);
      } else {
        vCount = 0;
        vButton();
      }
    }

    $("#vButton").click(function() {
      vCount++;
      vButton();
    });

    var viCount = 0;
    function viButton() {
      if (viCount === 0) {
        $("#viButton").html(Scales[num].sixth + " minor");
        $("#viRoot").html(Scales[num].sixth);
        $("#viThird").html(Scales[num].root);
        $("#viFifth").html(Scales[num].third);
      } else if (viCount === 1) {
        $("#viButton").html(
          Scales[num].sixth + "/" + Scales[num].root + " minor"
        );
        $("#viRoot").html(Scales[num].root);
        $("#viThird").html(Scales[num].third);
        $("#viFifth").html(Scales[num].sixth);
      } else if (viCount === 2) {
        $("#viButton").html(
          Scales[num].sixth + "/" + Scales[num].third + " minor"
        );
        $("#viRoot").html(Scales[num].third);
        $("#viThird").html(Scales[num].sixth);
        $("#viFifth").html(Scales[num].root);
      } else {
        viCount = 0;
        viButton();
      }
    }

    $("#viButton").click(function() {
      viCount++;
      viButton();
    });
  }

  $("#resetButton").click(function() {
    clickCount = 0;
    iiclickCount = 0;
    iiiclickCount = 0;
    ivclickCount = 0;
    vclickCount = 0;
    viclickCount = 0;
    $("#Key").html("Major Key");
    $("#scaleView").html("Notes in the key");
    $("#iButton").click(function() {
      getChord();
    });
    $("#iiButton").click(function() {
      getiiChord();
    });
    $("#iiiButton").click(function() {
      getiiiChord();
    });
    $("#ivButton").click(function() {
      getivChord();
    });
    $("#vButton").click(function() {
      getvChord();
    });
    $("#viButton").click(function() {
      getviChord();
    });
    getChord();
    getiiChord();
    getiiiChord();
    getivChord();
    getvChord();
    getviChord();
  });

  $("#button").click(function() {
    getKey(0);
  });
  $("#dbutton").click(function() {
    getKey(1);
  });
  $("#ebutton").click(function() {
    getKey(2);
  });
  $("#fbutton").click(function() {
    getKey(3);
  });
  $("#gbutton").click(function() {
    getKey(4);
  });
  $("#abutton").click(function() {
    getKey(5);
  });
  $("#bbutton").click(function() {
    getKey(6);
  });
  $("#csbutton").click(function() {
    getKey(7);
  });
  $("#fsbutton").click(function() {
    getKey(8);
  });
  $("#gbbutton").click(function() {
    getKey(9);
  });
  $("#abbutton").click(function() {
    getKey(10);
  });
  $("#bbbutton").click(function() {
    getKey(11);
  });
  $("#cbbutton").click(function() {
    getKey(12);
  });
  $("#dbbutton").click(function() {
    getKey(13);
  });
  $("#ebbutton").click(function() {
    getKey(14);
  });
});
