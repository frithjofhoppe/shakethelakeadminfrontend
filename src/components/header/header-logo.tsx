import * as React from 'react';

import logo from '../../../src/assets/icons/shake-the-lake-icon.svg';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {cn} from '../../lib/utils';

const HeaderLogo: React.FC = ({hasBorderBottom = false}) => {
	const {t} = useTranslation();
	return (
		<div className={cn('flex h-14 items-center px-4 lg:h-[60px] lg:px-6', hasBorderBottom ? 'border-b' : '')}>
			<Link to="/" className="flex items-center gap-2 font-semibold">
				<img src={logo} alt="Website Logo" className="mr-2 h-10 w-10"/>
				<span className="heading-xs">{t('ShakeTheLake')}</span>
			</Link>
		</div>
	);
};

export default HeaderLogo;