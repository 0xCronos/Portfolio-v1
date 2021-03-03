export const classes = {
    // flexboxes
    flexCenter: 'flex flex-row justify-center',
    flexWrapCenter: 'flex flex-row flex-wrap justify-center',
    flexColWrapCenter: 'flex flex-col flex-wrap justify-center',
    flexColCenter: 'flex flex-col justify-center',
    
    // boxes and borders
    stoneBox: 'bg-stone border border-ebony-clay text-primary',
    stoneTopBox: 'bg-stone border-t border-ebony-clay text-primary',
    stoneRightBox: 'bg-stone border-r border-ebony-clay text-primary',
    ebonyBox: 'bg-ebony border border-ebony-clay text-primary',
    ebonyBoxTertiary: 'bg-ebony border border-ebony-clay text-tertiary',

    //buttons
    primaryBtn: 'bg-stone border border-ebony-clay text-primary',
    hoverPrimaryBtn: 'hover:bg-gallery hover:text-stone hover:cursor-pointer',

    // Texts
    title: 'text-4xl sm:text-5xl md:text-6xl font-light text-primary my-4',
    subtitle: 'text-2xl sm:text-3xl md:text-4xl text-secondary font-light my-4',
    subsubtitle: 'text-lg sm:text-lg md:text-xl text-tertiary font-light mt-4',
    footerTitle: 'text-primary border-t border-alto p-2',

    // Transitions
    transition: 'transition-all duration-200 ease-in',

    // avatar
    avatar: 'bg-avatar hover:bg-avatar-hover bg-no-repeat bg-top bg-cover rounded-full',

    // specific components
    projectBar: 'absolute flex bg-ebony text-primary cursor-pointer',
    
    // others
    blurEffect: (active) => active ? 'transition-opacity duration-200 ease-in opacity-20 blur' : '',
    
}