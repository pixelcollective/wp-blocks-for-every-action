export const { registerBlockType } = wp.blocks

export const { __ } = wp.i18n

export const {
  RangeControl,
  SelectControl,
  TextControl,
  ToggleControl,
  Dashicon,
  IconButton,
  Button,
  Toolbar,
  PanelBody,
  RadioControl,
  BaseControl,
  QueryControls,
  CheckboxControl,
  FormToggle,
} = wp.components

export const {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
  RichText,
  URLInput,
  MediaUpload,
} = wp.editor.InspectorControls ? wp.editor : wp.blocks

export const {
  PanelColorSettings,
  BlockAlignmentToolbar,
  InnerBlocks,
} = wp.editor

export const {
  Fragment,
  renderToString,
} = wp.element

export const {
  omit,
  merge,
} = lodash

export const {
  doAction,
  addAction,
  applyFilters,
  addFilter,
} = wp.hooks

export const {
  withSelect,
} = wp.data