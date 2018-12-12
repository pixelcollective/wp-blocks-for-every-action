import classnames from 'classnames'
import {
	__,
	RichText,
} from './../wp_imports'

function ButtonEdit( props ) {
    const {
        className = '',
        align = 'center',
        size = 'small',
        color,
        text = '',
        backgroundColor,
        borderRadius = 4,
        isSelected = null,
        hidden = '',
        onFocus = () => {},
        onChange = () => {},
    } = props

    const style = {
        borderRadius: borderRadius + 'px',
        backgroundColor: backgroundColor ? backgroundColor : undefined,
    }

    const mainClasses = classnames( [
        className,
        'every-action-button',
        `every-action-button-${align}`,
        `every-action-button-${size}`,
    ] )
    if(!hidden) {
    return (

        <span
            className={ mainClasses }
            style={ style }
            data-is-placeholder-visible={ RichText.isEmpty( text ) }>
            <RichText
                tagName={ 'span' }
                placeholder={ __( 'Enter Text' ) }
                value={ text }
                onChange={ onChange }
                formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                className={ `every-action-button-inner` }
                style={ { color } }
                onFocus={ onFocus }
                isSelected={ isSelected }
                keepPlaceholderOnFocus
            />
        </span>
    ) } return null;
}

export default ButtonEdit