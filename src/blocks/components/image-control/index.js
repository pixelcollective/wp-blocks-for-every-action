import {
    BaseControl,
    MediaUpload,
    Fragment,
    Dashicon,
} from './../../wp_imports'

function ImageControl( props ) {
    const {
        label,
        imageID,
        imageURL,
        onChange = ( { url, id } ) => {},
        onRemove = () => {},
        allowedTypes = ['image'],
        help,
    } = props

    return (
        <div className='every-action-image-control'>
            <BaseControl label={ label } help={ help }>
                <MediaUpload
                    onSelect={ onChange }
                    allowedTypes={ allowedTypes }
                    value={ imageID }
                    render={ obj => {
                        return (
                            <Fragment>
                                { imageURL &&
                                    <div className='every-action-image-preview-wrapper'>
                                        <button className='every-action-image-preview-remove' onClick={ onRemove }><Dashicon icon='no'/></button>
                                        <img className='every-action-image-preview' src={ imageURL } onClick={ obj.open } />
                                    </div>
                                }
                                { ! imageURL && <div className='every-action-placeholder' onClick={ obj.open }>
                                    <svg viewBox="0 0 512 376">
                                        <path d="M0,0v376h512V0H0z M480,344H32V32h448V344z"/>
                                        <circle cx="409.1" cy="102.9" r="40.9"/>
                                        <polygon points="480,344 32,344 118.3,179.8 140,191.1 189,113.8 289,226.9 297.9,217.6 315,239.9 341,193.5 393.9,264.7 409,248.8"/>
                                    </svg>
                                </div> }
                            </Fragment>
                        )
                    } }
                />
            </BaseControl>
        </div>
    )
}

export default ImageControl