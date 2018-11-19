//  Import CSS.
import './style.scss';
import './editor.scss';

function getActionTagID(url) {
  let match = /(.*)\/\/(.*)\/(.*)/g.exec(url);
  let result = match[3];
  return result;
}

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PanelBody, TextControl } = wp.components;
const { InspectorControls } = wp.editor;

registerBlockType( 'tpc/every-action-donation-form', {
	title: __( 'Donation Form' ),
	icon: 'cart',
	category: 'every-action',
	keywords: [
		__( 'Every Action' ),
  ],
  attributes: {
    formURL: {
      type: 'string',
    },
    formID: {
      type: 'string',
    },
    appendedScript: {
      type: 'string',
    },
    disclaimer: {
      type: 'string',
    },
  },
  
  edit: function( props ) {
    const { attributes, setAttributes } = props;

		return (
      <div className="every-action-embed content">
      { ! attributes.formURL &&
        <div className="notification is-primary">Click me and configure your form on the right.</div>
      }
        <fieldset disabled>
          <div className="field">
            <div className="control">
              <input className={ 'input' } placeholder="Input" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className={ 'input' } placeholder="Input" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className={ 'input' } placeholder="Input etc..." />
            </div>
          </div>
          <button className={ 'button is-success is-disabled' }>Submit</button>
        </fieldset>
        <div className={ attributes.className }>
        <InspectorControls>
          <PanelBody>
            <TextControl
            label={__('Donation Form URL')}
            placeholder={ __( 'Paste Advocacy Form URL' ) }
            value={ attributes.formURL }
            onChange={ (formURLInput) => setAttributes( { formURL: formURLInput } ) } />
          <TextControl placeholder={ __( 'Add Disclaimer (Optional)' ) }
            label={__('Disclaimer (optional)')}
            value={ attributes.disclaimer }
            onChange={ (newDisclaimer) => setAttributes( { disclaimer: newDisclaimer } ) } />
          </PanelBody>
        </InspectorControls>
        </div>
      </div>
		);
	},

	save: function( props ) {
    const { attributes: { formURL, disclaimer } } = props;
    if(formURL) {
      return (
        <div className="every-action-embed">
          <script type='text/javascript' src='https://d1aqhv4sn5kxtx.cloudfront.net/actiontag/at.js' crossorigin='anonymous'></script>
          <div class="ngp-form"
              data-form-url={`https://actions.everyaction.com/v1/Forms/${getActionTagID(formURL)}`}
              data-fastaction-endpoint="https://fastaction.ngpvan.com"
              data-inline-errors="true"
              data-fastaction-nologin="true"
              data-databag-endpoint="https://profile.ngpvan.com"
              data-databag="everybody">
          </div>
          { disclaimer &&
            <span>{ disclaimer }</span>
          }
        </div>
      );
    }
	},
});
