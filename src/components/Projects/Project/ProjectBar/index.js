import { useContext } from 'react';
import { GitHub, Language, AspectRatio} from '@material-ui/icons';
import { classes } from '../../../../styles';
import BlurContext from '../../../../context/BlurContext';
import firebase from '../../../../../firebase';

const {transition, projectBar} = classes;

export const ProjectBar = ({visible, project, setSelected, setCurrentProject}) => {
    const {setBlur} = useContext(BlurContext);
    const {github, website} = project;

    // selecciona proyecto y muestra su vista expandida
    const handleClick = async () => {
        setCurrentProject(project);
        setSelected(true);
        setBlur(true);

        // suma vista al proyecto
        await firebase.db.collection('projects')
        .doc(project.id).update({
            'views': ++project.views
        });
    }

    return (
        <div className={`${transition} ${projectBar} ${visible ? 'opacity-90' : 'opacity-0'}`}>
            <a href={github} target='_blank' rel='noopener'>
                <GitHub className='m-4' fontSize='large' />
            </a>
            <a href={website} target='_blank' rel='noopener'>
                <Language className='m-4' fontSize='large' />
            </a>
            <AspectRatio className='m-4' fontSize='large' 
                onClick={handleClick}
            />
        </div>
    )
}