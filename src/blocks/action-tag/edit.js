/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import ActionTag from './editForm';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Component, Fragment } = wp.element;
const { PlainText } = wp.editor;
const { withState } = wp.compose;

/**
 * Block edit function
 */
class Edit extends Component {

  constructor() {
    super(...arguments);
    this.updateURL = this.updateURL.bind(this);
  }

  componentDidMount() {
    if (this.props.attributes.url) {
      this.props.setState({ preview: true })
    }
  }

  updateURL(newURL) {

    this.props.setAttributes({ url: newURL });

    if (!this.props.attributes.url) {
      this.props.setState({ preview: true })
    }
  }

  render() {

    const {
      attributes,
      className,
      isSelected,
      preview,
      setAttributes,
      setState,
      toggleSelection,
    } = this.props;

    const {
      url
    } = attributes;

    return [
      <Fragment>
        {preview ? (
          url && (
            <div
              className={classnames(
                className
              )}
            >
              <ActionTag
                url={url}
              />
            </div>
          )
        ) : (
            <div
              className={classnames(
                className,
                'wp-block-shortcode',
              )}
            >
              <label>
                {__('ActionTag URL')}
              </label>
              <PlainText
                className="input-control"
                value={url}
                placeholder={__('Add Action URL...')}
                onChange={this.updateURL}
              />
            </div>
          )}
      </Fragment>
    ];
  }
};

export default compose([
  withState({ preview: false }),
])(Edit);
