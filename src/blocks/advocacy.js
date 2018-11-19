const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const TEMPLATE = [
 	[ 'core/columns', {
		columns: 2,
	}, [
		[ 'core/column', { allowedBlocks: ['core/heading','core/paragraph'] }, [
			[ 'core/heading', {} ],
			[ 'core/paragraph', {} ],
		] ],
		[ 'core/column', {}, [
			[ 'tpc/every-action-advocacy-form', {} ],
		] ],
	] ],
];

registerBlockType( 'tpc/every-action-advocacy', {
  title: __( 'Advocacy Two Column' ), 
  icon: 'megaphone', 
  category: 'every-action', 
  keywords: [
    __( 'Bulma' ),
    __( 'Gutenberg' ),
    __( 'Layout' ),
  ],

  edit: function( props ) {
    return (
      <div className="every-action-advocacy-template-container">
        <div className={ props.attributes.className }>
          <InnerBlocks template={ TEMPLATE } />
        </div>
      </div>
    );
  },

  save: function( props ) {
    return (
      <InnerBlocks.Content />
    );
  },
});
