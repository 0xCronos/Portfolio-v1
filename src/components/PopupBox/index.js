import { classes } from '../../styles';

export const PopupBox = ({children, popup}) => {
    return (
        <div 
            className={`${classes.transition} max-w-2xl fixed z-10 ${popup ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            {children}
        </div>
    )
}