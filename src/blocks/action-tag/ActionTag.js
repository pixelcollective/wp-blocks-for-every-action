import Edit from './edit';
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { createBlock, getBlockAttributes, registerBlockType } = wp.blocks;

/**
 * Block constants
 */
const name = 'actionTag';
const title = __('Every Action Embed');
const keywords = [
  __('Advocacy'),
  __('ActionTag'),
  __('tinypixel'),
];
const blockAttributes = {
  url: {
    type: 'string',
  },
  file: {
    type: 'string',
  },
  meta: {
    type: 'boolean',
    default: false,
  },
};

const schema = {
  div: {
    classes: ['wp-block-every-action-action-tag'],
  },
};

registerBlockType('every-action/every-action-embed', {
  title: title,
  description: __('Embed Every Action Advocacy Forms by adding the form link.'),
  icon: {
    src: 'megaphone',
  },
  category: 'common',
  keywords: keywords,
  attributes: blockAttributes,
  supports: {
    html: false,
    align: ['wide'],
  },
  edit: Edit,
  save({ attributes, className }) {
    const { url } = attributes;
    let actionTagContent = null;
    if(url) {
      let match = /(.*)\/\/(.*)\/(.*)/g.exec(url);
      if(match) {
        actionTagContent = `\
          <div class="every-action-embed">\
            <div class="ngp-form"\
              data-form-url="https://actions.everyaction.com/v1/Forms/${match[3]}" \
              data-fastaction-endpoint="https://fastaction.ngpvan.com"\
              data-inline-errors="true"\
              data-fastaction-nologin="true"\
              data-databag="everybody">\
            </div>\
          </div>`;
      }
    }

    if(actionTagContent) {
      return (
        <div
          className={
            classnames(
              className,
            )}
        >
          <script type="text/javascript" src="https://d1aqhv4sn5kxtx.cloudfront.net/actiontag/at.js" crossorigin="anonymous"></script>
          <div dangerouslySetInnerHTML={{ __html: actionTagContent }} />
          <noscript><a href={url}>{__('View this action on Every Action')}</a></noscript>
        </div>
      );
    }

    return "there was a problem 🤭";

  },
});