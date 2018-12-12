/**
 * Horizontal alignment toolbar
 * Very similar to the AlignmentToolbar, but is meant for left/center/right horizontal alignments
 *
 * The code is mostly from AlignmentToolbar
 */
import {
    __,
    Toolbar,
} from './../../wp_imports'

const { find } = lodash
const { withViewportMatch } = wp.viewport
const { withSelect } = wp.data
const { compose } = wp.compose

const ALIGNMENT_CONTROLS = [
	{
		icon: 'align-wide',
		title: __( 'Occupy Entire Width' ),
		align: 'full',
	},
	{
		icon: 'align-pull-left',
		title: __( 'Half & Align Left' ),
		align: 'left',
	},
	{
		icon: 'align-center',
		title: __( 'Half & Align Center' ),
		align: 'center',
	},
	{
		icon: 'align-pull-right',
		title: __( 'Half & Align Right' ),
		align: 'right',
	},
];

export function HorizontalAlignmentToolbar( { isCollapsed, value, onChange } ) {
	function applyOrUnset( align ) {
		return () => onChange( align );
	}

	const activeAlignment = find( ALIGNMENT_CONTROLS, ( control ) => control.align === value );

	return (
		<Toolbar
			isCollapsed={ isCollapsed }
			icon={ activeAlignment ? activeAlignment.icon : 'align-wide' }
			label={ __( 'Change Horizontal Alignment' ) }
			controls={ ALIGNMENT_CONTROLS.map( ( control ) => {
				const { align } = control;
				const isActive = ( value === align );

				return {
					...control,
					isActive,
					onClick: applyOrUnset( align ),
				};
			} ) }
		/>
	);
}

export default compose(
	withViewportMatch( { isLargeViewport: 'medium' } ),
	withSelect( ( select, { clientId, isLargeViewport, isCollapsed } ) => {
		const { getBlockRootClientId, getEditorSettings } = select( 'core/editor' );
		return {
			isCollapsed: isCollapsed || ! isLargeViewport || (
				! getEditorSettings().hasFixedToolbar &&
				getBlockRootClientId( clientId )
			),
		};
	} ),
)( HorizontalAlignmentToolbar );
