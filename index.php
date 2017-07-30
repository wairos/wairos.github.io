<?php include("header.php"); ?>

<div class="container jumbotron">
  <div class="top-info">
    <h1 class="text-center" style="font-family:Anton;color:">MusicianKey</h1>
    <h5 class="text-center"> An easy-to-use music theory reference tool for musicians.</h5>
  </div>
  <div class="highlight-bar">
    <h1>Pick A Key</h1>
  </div>
  <div class="row headroom">
    <div class="col-lg-4 col-md-4 col-sm-4 text-center">
      <button id="button" class="btn-small btn-primary small-width">C</button>
      <button id="dbutton" class="btn-small btn-primary small-width">D</button>
      <button id="ebutton" class="btn-small btn-primary small-width">E</button>
      <button id="fbutton" class="btn-small btn-primary small-width">F</button>
      <button id="gbutton" class="btn-small btn-primary small-width">G</button>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 text-center">
      <button id="abutton" class="btn-small btn-primary small-width">A</button>
      <button id="bbutton" class="btn-small btn-primary small-width">B</button>
      <button id="csbutton" class="btn-small btn-primary small-width">C#</button>
      <button id="fsbutton" class="btn-small btn-primary small-width">F#</button>
      <button id="gbbutton" class="btn-small btn-primary small-width">Gb</button>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 text-center">
      <button id="abbutton" class="btn-small btn-primary small-width">Ab</button>
      <button id="bbbutton" class="btn-small btn-primary small-width">Bb</button>
      <button id="cbbutton" class="btn-small btn-primary small-width">Cb</button>
      <button id="dbbutton" class="btn-small btn-primary small-width">Db</button>
      <button id="ebbutton" class="btn-small btn-primary small-width">Eb</button>
    </div>
    <div style="margin:0 auto;">
      <button id="resetButton" class="btn-small btn-primary">Reset</button>
    </div>
  </div>

  <div class="highlight-bar headroom">
    <h1 id="ChordViewHeading">Notes and Triads</h1>
  </div>
  <div class="viewer">

    <h2 id="Key" class="viewer-heading">The Current Key</h2>

    <p id="scaleView" class="viewer-info">Notes in the key</p>

    <div class="" style="margin:0 auto;padding:10px;">
      <div class="row">
        <div class="chord-column">

          <ul id="iChordList" style="list-style:none; padding-left:-10px; ">
            <li>
              <p id="Fifth">5th</p>
            </li>
            <li>
              <p id="Third">3rd</p>
            </li>
            <li>
              <p id="Root">Root</p>
            </li>
          </ul>
          <button id="iButton" class="chord-column-btn btn btn-secondary">I Chord</button>

        </div>
        <div class="chord-column">

          <ul style="list-style:none; padding-left:-10px;">
            <li>
              <p id="iiFifth">6th</p>
            </li>
            <li>
              <p id="iiThird">4th</p>
            </li>
            <li>
              <p id="iiRoot">2nd</p>

            </li>
          </ul>
          <button id="iiButton" class="chord-column-btn btn btn-secondary">ii Chord</button>
        </div>
        <div class="chord-column">

          <ul style="list-style:none; padding-left:-10px;">
            <li>
              <p id="iiiFifth">7th</p>

            </li>
            <li>
              <p id="iiiThird">5th</p>
            </li>
            <li>
              <p id="iiiRoot">3rd</p>
            </li>
          </ul>
          <button id="iiiButton" class="chord-column-btn btn btn-secondary">iii Chord</button>
        </div>
        <div class="chord-column">

          <ul style="list-style:none; padding-left:-10px;">
            <li>
              <p id="ivFifth">Root</p>

            </li>
            <li>
              <p id="ivThird">6th</p>
            </li>
            <li>
              <p id="ivRoot">4th</p>
            </li>
          </ul>
          <button id="ivButton" class="chord-column-btn btn btn-secondary">IV Chord</button>
        </div>
        <div class="chord-column">

          <ul style="list-style:none; padding-left:-10px;">
            <li>
              <p id="vFifth">2nd</p>

            </li>
            <li>
              <p id="vThird">7th</p>
            </li>
            <li>
              <p id="vRoot">5th</p>
            </li>
          </ul>
          <button id="vButton" class="chord-column-btn btn btn-secondary">V Chord</button>
        </div>
        <div class="chord-column">

          <ul style="list-style:none; padding-left:-10px;">
            <li>
              <p id="viFifth">3rd</p>

            </li>
            <li>
              <p id="viThird">Root</p>
            </li>
            <li>
              <p id="viRoot">6th</p>
            </li>
          </ul>
          <button id="viButton" class="chord-column-btn btn btn-secondary chordButtons">vi Chord</button>
        </div>
      </div>
    </div>
  </div>

    <div class="highlight-bar headroom">

      <h1 id="ModeViewHeading">Modes</h1>

    </div>
    <div class="viewer">
      <div class="viewer-heading">
        <h2 id="Mode"></h2>
      </div>
      <p id="ModeNotes" class="viewer-info"></p>

    </div>

    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-6 text-center">
        <button id="Ionian" class="btn-small btn-primary">Ionian</button>
        <button id="Dorian" class="btn-small btn-primary">Dorian</button>
        <button id="Phrygian" class="btn-small btn-primary">Phrygian</button>
        <button id="Lydian" class="btn-small btn-primary">Lydian</button>
        <button id="Mixolydian" class="btn-small btn-primary">Mixolydian</button>
        <button id="Aeolian" class="btn-small btn-primary">Aeolian</button>
        <button id="Locrian" class="btn-small btn-primary">Locrian</button>
      </div>
    </div>

    <div style="padding:50px 0;">
      <div id="help-text">
        <div id="help-hide-buttons">
          <button id="help-button" class="btn btn-secondary">Help?</button>
          <button id="hide-button" class="btn btn-secondary" style="display:none;">X</button>
        </div>
        <p class="help-text">The viewer above contains a large amount of information. The top of the viewer displays the name of the current key. The 7 notes of the key can be found in the grey bar. Finally, each common chord is displayed along with a list of its chord-tones.</p>
        <p class="help-text">In each key there are six common chords (the vii &deg; chord is not very common in popular music so it is omitted). They are described by the Roman numerals: I, ii, iii, IV, V, and vi. Chords with upper-case Roman numerals are Major chords. Chords with lower-case Roman numerals are minor chords. By default, the viewer shows the basic structure of each chord. Every chord is composed of at least three chord-tones: a root note, a 3rd, and a 5th. The chord-tones of each chord are listed with the highest sounding note on top and the lowest sounding note on the bottom. A chord is in root-position when the root note is the lowest sounding note of the chord. If any other chord-tone (3rd or 5th) is the lowest sounding note, the chord is then an inversion.</p>
        <p class="help-text"> To get started pick a key by clicking one of the blue buttons above. If you would like to return to the default view, click the Reset button. Also, you can click on the white buttons located below each list of chord-tones, changing the chord into an inversion.</p>
        <p class="help-text"><strong>Have fun.</strong></p>
      </div>
    </div>


    <p class="small text-right" style="margin-top:40px;">&copy; 2017 Lukas Waire</p>
</div>
<?php include("footer.php"); ?>
