import React from "react";
import HighlightTwoToneIcon from '@material-ui/icons/HighlightTwoTone';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

function Header(){
    return (
    <header>
      <h1><SpeakerNotesIcon className= "logo"/> Organizer</h1>
    </header>
);
    
}

export default Header;