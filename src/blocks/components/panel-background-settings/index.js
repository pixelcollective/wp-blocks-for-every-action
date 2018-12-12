import ImageControl from '../image-control'
import {
    __,
    Fragment,
    PanelColorSettings,
    RangeControl,
    ToggleControl,
} from './../../wp_imports'

function PanelBackgroundSettings( props ) {

    const {
        backgroundColor,
        backgroundImageID,
        backgroundImageURL,
        backgroundOpacity,
        fixedBackground,
        onChangeBackgroundColor = () => {},
        onChangeBackgroundImage, // = ( { url, id } ) => {},
        onRemoveBackgroundImage, // = () => {},
        onChangeBackgroundOpacity, // = () => {},
        onChangeFixedBackground,
    } = props

    return (
        <Fragment>
            <PanelColorSettings
                initialOpen={ false }
                title={ __( 'Background Settings' ) }
                colorSettings={ [
                    {
                        value: backgroundColor,
                        onChange: onChangeBackgroundColor,
                        label: __( 'Background Color' ),
                    },
                ] }
                { ...props }
            >
                { onChangeBackgroundImage && (
                    <ImageControl
                        label={ __( 'Background Image' ) }
                        onRemove={ onRemoveBackgroundImage }
                        onChange={ onChangeBackgroundImage }
                        imageID={ backgroundImageID }
                        imageURL={ backgroundImageURL }
                        />
                ) }
                { onChangeBackgroundOpacity && (
                    <RangeControl
                        label={ __( 'Background Image Tint Strength' ) }
                        value={ backgroundOpacity }
                        onChange={ onChangeBackgroundOpacity }
                        min={ 0 }
                        max={ 10 }
                        step={ 1 }
                    />
                ) }
                { onChangeFixedBackground && (
                    <ToggleControl
                        label={ __( 'Fixed Background' ) }
                        checked={ fixedBackground }
                        onChange={ onChangeFixedBackground }
                    />
                ) }
            </PanelColorSettings>
        </Fragment>
    )
}

export default PanelBackgroundSettings