/**
 * BLOCK: Every Action ActionTag
 *
 * Display a simple embed from NGP VAN's CRM.
 *
 * @link: https://developers.everyaction.com/action-tag
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types'
import { isNullOrUndefined } from 'util';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { Placeholder, Spinner } = wp.components;

export default class ActionTag extends Component {
  constructor(props) {
    super(props)
    this.url = props.url

    /**
     *  We only want to invoke ActionTag once
     *  as this process involves appending a script
     *  to the head which explicitly calls upon Every Action's
     *  servers to fetch html output and replace a specific DOM element.
     */
    this.state = {
      url: props.url,
      loading: true, // We have not invoked ActionTag
      scriptAdded: 0, // We have not appended the script
      actionTagContent: '', // We have no embed
    }
  }

  /**
   *  Add NGP's <script> to <head>
   *  if it is not already present
   */
  addScript() {
    if (document.getElementById('ngpActionTagScript') == null) {
      let actionTagScript = document.createElement('script');
      actionTagScript.type = 'text/javascript';
      actionTagScript.id = 'ngpActionTagScript';
      actionTagScript.src = 'https://d1aqhv4sn5kxtx.cloudfront.net/actiontag/at.js';
      actionTagScript.crossOrigin = 'anonymous';
      document.head.appendChild(actionTagScript);
    }

    this.setState({
      scriptAdded: this.state.scriptAdded + 1,
    });
  }

  /**
   * Remove NGP's <script> from <head>
   */
  removeScript() {
    let ngpActionTagScript = document.getElementById('ngpActionTagScript');
    ngpActionTagScript.parentNode.removeChild(ngpActionTagScript);
    this.setState({
      scriptAdded: false,
    });
  }

  /**
   *  Regular Expression to parse ActionTag ID from hosted form's URL
   */
  getActionTagID() {
    let match = /(.*)\/\/(.*)\/(.*)/g.exec(this.url);
    let result = match[3];
    return result;
  }

  /**
   *  Formats embed code using NGP VAN's standard embed code
   *  and the Action Tag ID from getActionTagID()
   */
  formatEmbed() {
    this.setState({
      actionTagContent: `\
        <div class="every-action-embed">\
          <div class="ngp-form"\
            data-form-url="https://actions.everyaction.com/v1/Forms/${this.getActionTagID()}" \
            data-fastaction-endpoint="https://fastaction.ngpvan.com" \
            data-inline-errors="true"\
            data-fastaction-nologin="true"\
            data-databag="everybody">\
          </div>\
        </div>`,
      loading: false
    });
  }

  /**
   *  Executed when component mounts.
   *  Generates script tag and appends to DOM head
   *  Generates embed code and adds to store
   */
  componentDidMount() {
    if (!document.getElementById('ngpActionTagScript') == null) {
      this.removeScript();
    }
    this.addScript();
    this.formatEmbed();
  }

  /**
   *  Render the form upon submisssion. Before load
   *  displays
   */
  render() {
    if (this.state.loading) {
      return [
        <Placeholder
          key="placeholder"
          label={__('Loading Every Action')}>
          <Spinner />
        </Placeholder>

      ];
    } else {
      // Render as html.
      // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
      return <div id={this.state.scriptAdded} dangerouslySetInnerHTML={{ __html: this.state.actionTagContent }} />;
    }
  }
}

// - PROP TYPES -
ActionTag.propTypes = {
  url: PropTypes.string.isRequired,
}
