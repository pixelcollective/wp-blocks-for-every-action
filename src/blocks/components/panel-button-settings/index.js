import {
    __,
    Fragment,
    PanelColorSettings,
    SelectControl,
    RangeControl,
    CheckboxControl,
    FormToggle,
    BaseControl
} from './../../wp_imports'

function PanelButtonSettings( props ) {

    const {
        buttonHidden,
        buttonColor,
        buttonTextColor,
        buttonSize,
        buttonBorderRadius,
        onChangeButtonHidden = () => {},
        onChangeButtonColor = () => {},
        onChangeButtonTextColor = () => {},
        onChangeButtonSize = () => {},
        onChangeButtonBorderRadius = () => {},
    } = props

    return (
        <Fragment>
            <PanelColorSettings
                initialOpen={ false }
                title={  __( 'Button Settings' ) }
                colorSettings={ [
                    {
                        value: buttonColor,
                        onChange: onChangeButtonColor,
                        label: __( 'Button Color' ),
                    },
                    {
                        value: buttonTextColor,
                        onChange: onChangeButtonTextColor,
                        label: __( 'Text Color' ),
                    },
                ] }
                { ...props }
            >
            <SelectControl
                    label={ __( 'Hidden' ) }
                    value={ buttonHidden }
                    options={ [
                        { value: '', label: __( 'Button visible' ) },
                        { value: 'true', label: __( 'Button hidden' ) },
                    ] }
                    onChange={ onChangeButtonHidden }
                />
                <SelectControl
                    label={ __( 'Size' ) }
                    value={ buttonSize }
                    options={ [
                        { value: 'small', label: __( 'Small' ) },
                        { value: 'normal', label: __( 'Normal' ) },
                        { value: 'medium', label: __( 'Medium' ) },
                        { value: 'large', label: __( 'Large' ) },
                    ] }
                    onChange={ onChangeButtonSize }
                />
                <RangeControl
                    label={ __( 'Border Radius' ) }
                    value={ buttonBorderRadius }
                    min='1'
                    max='50'
                    onChange={ onChangeButtonBorderRadius }
                />
            </PanelColorSettings>
        </Fragment>
    )
}

export default PanelButtonSettings