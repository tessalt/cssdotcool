const styles = {
  fontFamily: {
    title: 'Font families',
    property: 'fontFamily',
    cssName: 'font-family',
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
    exampleText: "The quick brown fox jumps over the lazy dog"
  },
  borderStyle: {
    title: 'Border styles',
    property: 'borderStyle',
    cssName: 'border-style',
    defaultStyles: {
      borderWidth: '5px',
      borderColor: 'plum',
      color: 'white'
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
    title: 'Border radius',
    cssName: 'border-radius',
    property: 'borderRadius',
    defaultStyles: {
      width: '100px',
      height: '100px',
      backgroundColor: 'MediumOrchid',
      color: 'transparent'
    },
    examples: [
      '5px',
      '25px',
      '50%'
    ]
  },
  boxShadow: {
    title: 'Box shadows',
    property: 'boxShadow',
    cssName: 'box-shadow',
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
    title: 'Text shadows',
    property: 'textShadow',
    cssName: 'text-shadow',
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
  },
  fontStyle: {
    title: 'Font styles',
    property: 'fontStyle',
    cssName: 'font-style',
    defaultStyles: {},
    examples: [
      'normal',
      'italic'
    ]
  },
  alignment: {
    title: 'Text alignment',
    property: 'textAlign',
    cssName: 'text-align',
    defaultStyles: {
      backgroundColor: 'aliceblue'
    },
    examples: [
      'left',
      'right',
      'center'
    ]
  },
  transform: {
    title: 'Transform',
    property: 'transform',
    cssName: 'transform',
    defaultStyles: {
      backgroundColor: 'cyan',
      display: 'inline-block'
    },
    examples: [
      'rotate(30deg)',
      'skewX(50deg)',
      'skewY(25deg)'
    ]
  }

}

export default styles;
