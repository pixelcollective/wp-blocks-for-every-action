/**
 * BLOCK: Horizontal Photo Card Block.
 *
 * 🌄 Pictures on the left;
 * 🌉 Prose to the right.
 *
 *
 */

import classnames from 'classnames'
import { CardIcon } from './../icons'
import ButtonEdit from './../button/button-edit'
import ButtonSave from './../button/button-save'
import PanelButtonSettings from './../components/panel-button-settings'
import ImageUploadPlaceholder from './../components/image-upload-placeholder'

import {
  registerBlockType,
  __,
  PanelColorSettings,
  IconButton,
  Dashicon,
  InspectorControls,
  RichText,
  BlockControls,
  AlignmentToolbar,
  URLInput,
  Fragment,
} from './../wp_imports'

export const edit = (props) => {

  const {
    isSelected,
    editable,
    setState,
    className,
    setAttributes
  } = props;

  const {
    heading,
    des,
    mediaID,
    mediaURL,
    headingColor,
    buttonHidden,
    desColor,
    buttonURL,
    buttonText,
    buttonColor,
    buttonTextColor,
    size,
    cornerButtonRadius,
    contentAlign
  } = props.attributes;

  const mainClasses = classnames([
    className,
    'every-action-card-horizontal-container every-action-card-horizontal',
  ])

  return (
    <Fragment>
      <BlockControls>
        <AlignmentToolbar
          value={contentAlign}
          onChange={(newAlign) => setAttributes({ contentAlign: newAlign })}
        />
      </BlockControls>
      <InspectorControls>
        <PanelColorSettings
          title={__('Text Colors')}
          colorSettings={[
            {
              value: headingColor,
              onChange: (colorValue) => setAttributes({ headingColor: colorValue }),
              label: __('Heading Color'),
            },
            {
              value: desColor,
              onChange: (colorValue) => setAttributes({ desColor: colorValue }),
              label: __('Description Color'),
            },
          ]}
        >
        </PanelColorSettings>
        <PanelButtonSettings
          initialOpen={false}
          buttonHidden={buttonHidden}
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          buttonSize={size}
          buttonBorderRadius={cornerButtonRadius}
          onChangeButtonHidden={(value) => setAttributes({buttonHidden: value})}
          onChangeButtonColor={(value) => setAttributes({ buttonColor: value })}
          onChangeButtonTextColor={(value) => setAttributes({ buttonTextColor: value })}
          onChangeButtonSize={(value) => { setAttributes({ size: value }) }}
          onChangeButtonBorderRadius={(value) => setAttributes({ cornerButtonRadius: value })}
        />
      </InspectorControls>
      <div className={mainClasses}>
        <ImageUploadPlaceholder
          className='every-action-card-horizontal-image'
          imageID={mediaID}
          imageURL={mediaURL}
          onRemove={() => { setAttributes({ mediaURL: '', mediaID: '' }) }}
          onChange={({ url, id }) => { setAttributes({ mediaURL: url, mediaID: id }) }}
        />
        <div className="every-action-card-horizontal-stacked">
          <div className="every-action-card-horizontal-content">
            <RichText
              tagName={'h4'}
              value={heading}
              className={'every-action-card-horizontal-title'}
              onChange={(text) => setAttributes({ heading: text })}
              style={{
                color: headingColor,
                textAlign: contentAlign
              }}
              keepPlaceholderOnFocus
            />
            <RichText
              tagName={'p'}
              value={des}
              className={'every-action-card-horizontal-description'}
              onChange={(text) => setAttributes({ des: text })}
              style={{
                color: desColor,
                textAlign: contentAlign
              }}
              keepPlaceholderOnFocus
            />
          </div>
          {!buttonHidden && (
          <div className="every-action-card-horizontal-action">
            <ButtonEdit hidden={buttonHidden} size={size} align={contentAlign} color={buttonTextColor} backgroundColor={buttonColor} text={buttonText} borderRadius={cornerButtonRadius}
              onChange={(text) => setAttributes({ buttonText: text })}
            />
          </div>
          )}
        </div>
      </div>
      {isSelected && !buttonHidden && (
        <form
          onSubmit={(event) => event.preventDefault()}
          className={`blocks-button__inline-link every-action-button-${contentAlign}`}
          style={{ marginTop: 10 }}
        >
          <Dashicon icon={'admin-links'} />
          <URLInput
            value={buttonURL}
            onChange={(value) => setAttributes({ buttonURL: value })}
          />
          <IconButton
            icon={'editor-break'}
            label={__('Apply')}
            type={'submit'}
          />
        </form>
      )}
    </Fragment>
  )
}

export const save = (props) => {

  const { className } = props
  const {
    heading,
    des,
    mediaURL,
    mediaID,
    headingColor,
    taglineColor,
    buttonHidden,
    desColor,
    buttonURL,
    buttonText,
    buttonColor,
    buttonTextColor,
    size,
    cornerButtonRadius,
    contentAlign
  } = props.attributes;

  const mainClasses = classnames([
    className,
    'every-action-card-horizontal-container every-action-card-horizontal',
  ])

  return (
    <div className={mainClasses}>
      {mediaURL && <div className="every-action-card-horizontal-image" style={{ backgroundImage: `url(${mediaURL})`, textAlign: contentAlign }} data-src={mediaURL} />}
      <div className="every-action-card-horizontal-stacked">
        <div className="every-action-card-horizontal-content">
      {!RichText.isEmpty(heading) && (
        <RichText.Content
          tagName="h4"
          className="every-action-card-horizontal-title"
          style={{ color: headingColor, textAlign: contentAlign }}
          value={heading}
        />
      )}
          {!RichText.isEmpty(des) && (
            <RichText.Content
              tagName="p"
              className='every-action-card-horizontal-description'
              style={{ color: desColor, textAlign: contentAlign }}
              value={des}
            />
          )}
        </div>
        {!buttonHidden && (
        <div className="every-action-card-horizontal-action">
            <ButtonSave hidden={buttonHidden} size={size} url={buttonURL} align={contentAlign} color={buttonTextColor} text={buttonText} backgroundColor={buttonColor} borderRadius={cornerButtonRadius} />
        </div>
        )}
      </div>
    </div>
  );
}

const schema = {
  mediaID: {
    type: 'number',
  },
  mediaURL: {
    type: 'string',
    source: 'attribute',
    selector: '.every-action-card-horizontal-image',
    attribute: 'data-src',
  },
  heading: {
    source: 'html',
    selector: '.every-action-card-horizontal h4',
    default: __('Your Headline Here')
  },
  des: {
    source: 'html',
    selector: '.every-action-card-horizontal-description',
    default: __('The Headline concept and buttressing tagline are followed by a brief description. Remember to set an image and BAM! You\'ve got yourself a card 👏🏽')
  },
  headingColor: {
    type: 'string',
  },
  desColor: {
    type: 'string',
  },
  buttonURL: {
    type: 'string',
    source: 'attribute',
    selector: '.every-action-button-inner',
    attribute: 'href',
  },
  buttonHidden: {
    type: 'string',
  },
  buttonText: {
    source: 'html',
    selector: '.every-action-button-inner',
    default: __('Button')
  },
  buttonColor: {
    type: 'string',
  },
  buttonTextColor: {
    type: 'string',
    default: '#ffffff',
  },
  size: {
    type: 'string',
    default: 'normal',
  },
  cornerButtonRadius: {
    type: 'number',
    default: 4,
  },
  contentAlign: {
    type: 'string',
    default: 'left',
  },
}

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('every-action/horizontal', {
  title: __('Horizontal Card'),
  icon: CardIcon,
  category: 'common',
  keywords: [
    __('every-action'),
    __('Card'),
    __('horizontal'),
  ],
  attributes: schema,
  edit,
  save,
});
