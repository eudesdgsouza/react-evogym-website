import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { BenefitType } from '@/shared/types';

export const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6'/>,
        title: 'Instalações de última geração',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim cum necessitatibus id aliquam reiciendis.'
    },
    {
        icon: <UserGroupIcon className='h-6 w-6'/>,
        title: `Centenas de aulas diversas`,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim cum necessitatibus id aliquam reiciendis.'
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6'/>,
        title: 'Treinadores especialistas e profissionais',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim cum necessitatibus id aliquam reiciendis.'
    },
];