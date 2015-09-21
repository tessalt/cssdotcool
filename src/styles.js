const styles = {
   fontFamily: {
    property: 'fontFamily',
    examples: [
      'Verdana,Geneva,sans-serif',
      'Helvetica,Arial,sans-serif',
      '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
      '"Trebuchet MS", Helvetica, sans-serif',
      'Georgia,Utopia,Charter,serif',
      '"Times New Roman",Times,serif',
      '"Courier New",Courier,monospace',
      '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      '"Comic Sans MS", cursive, sans-serif',
      'Impact, Charcoal, sans-serif'
    ],
    defaultStyles: {}
  },
  borderStyle: {
    property: 'borderStyle',
    defaultStyles: {
      borderWidth: '5px',
      borderColor: 'lightblue'
    },
    examples: [
      'solid',
      'double',
      'dotted',
      'dashed',
      'ridge',
      'inset',
      'outset',
      'groove'
    ]
  },
  borderRadius: {
    property: 'borderRadius',
    defaultStyles: {
      width: '100px',
      height: '100px',
      backgroundColor: 'blue'
    },
    examples: [
      '5px',
      '25px',
      '50%'
    ]
  },
  boxShadow: {
    property: 'boxShadow',
    defaultStyles: {
      width: '100px',
      height: '100px'
    },
    examples: [
      '0 0 5px #888',
      '5px 5px 0 #888',
      '5px 5px 5px #888',
      '0 0 5px 2px magenta',
      'inset 0 0 8px goldenrod'
    ]
  },
  textShadow: {
    property: 'textShadow',
    defaultStyles: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: 'lightgrey',
      fontFamily: 'Arial'
    },
    examples: [
      '2px 2px 2px #888',
      '1px 1px 0 black',
      '2px 2px 0px white, 4px 4px 0px #888',
      '0px 0px 2px magenta'
    ]
  }
}

export default styles;
