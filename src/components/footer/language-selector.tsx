import React, {useState} from 'react';
import {Separator} from '../ui/separator';
import {CH, DE, EN} from '../../constants';
import {ToggleGroup, ToggleGroupItem} from '../ui/toggle-group';
import {useTranslation} from 'react-i18next';

const LanguageSelector: React.FC = () => {
	
	const [language, setLanguage] = useState(EN);

	const {t, i18n} = useTranslation();

	const changeLanguageHandler = (lang: string) => {
		i18n.changeLanguage(lang);
		setLanguage(lang);
	};
    
	return (
		<ToggleGroup type="single" value={language} onValueChange={changeLanguageHandler} size={'sm'}
			className="text-white flex items-center space-x-1 text-sm">
			<ToggleGroupItem value={DE} aria-label="Toggle german">
				<div className="uppercase">de</div>
			</ToggleGroupItem>
			<Separator orientation="vertical" className="h-5" />
			<ToggleGroupItem value={EN} aria-label="Toggle english">
				<div className="uppercase">en</div>
			</ToggleGroupItem>
			<Separator orientation="vertical" className="h-5" />
			<ToggleGroupItem value={CH} aria-label="Toggle swiss german">
				<div className="uppercase">ch</div>
			</ToggleGroupItem>
		</ToggleGroup>
	);
};

export default LanguageSelector;
