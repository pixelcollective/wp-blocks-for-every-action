/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.editor;
const { Toolbar, IconButton } = wp.components;

class Controls extends Component {

  constructor(props) {
    super(...arguments);
  }

  render() {

    const {
      className,
      attributes,
      preview,
      setAttributes,
      setState,
    } = this.props;

    return [
      <Fragment>
        <BlockControls>
          <Toolbar>
            {preview ? (
              <IconButton
                className="components-icon-button components-toolbar__control"
                label={__('Edit Action')}
                onClick={() => setState({ preview: false })}
                icon="edit"
              />
            ) : (
                <IconButton
                  className="components-icon-button components-toolbar__control"
                  label={__('View Action')}
                  onClick={() => setState({ preview: true })}
                  icon="welcome-view-site"
                />
              )}
          </Toolbar>
        </BlockControls>
      </Fragment>
    ];
  }
};

export default Controls;