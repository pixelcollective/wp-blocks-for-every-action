/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, TextControl, ToggleControl } = wp.components;

/**
 * Inspector controls
 */
class Inspector extends Component {

  constructor(props) {
    super(...arguments);
    this.updateURL = this.updateURL.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateURL(newURL) {
    this.props.setAttributes({ url: newURL });
  }

  updateFile(newFile) {
    this.props.setAttributes({ file: newFile });
  }

  getActionTagMetaHelp(checked) {
    return checked ? __('Showing ActionTag meta data.') : __('Toggle to show the ActionTag meta data.');
  }

  render() {

    const {
      attributes,
      setAttributes
    } = this.props;

    const {
      url,
      file,
      meta
    } = attributes;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__('ActionTag Settings')}>
            <TextControl
              label={__('Action Tag URL')}
              value={url}
              onChange={this.updateURL}
            />
            <TextControl
              label={__('ActionTag File')}
              value={file}
              onChange={this.updateFile}
            />
            <ToggleControl
              label={__('ActionTag Meta')}
              checked={!!meta}
              onChange={() => setAttributes({ meta: !meta })}
              help={this.getActionTagMetaHelp}
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }
};

export default Inspector;