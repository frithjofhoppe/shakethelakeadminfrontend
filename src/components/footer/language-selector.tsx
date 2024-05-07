import React, {useState} from 'react';
import {Separator} from '../ui/separator';
import {ch, de, en} from '../../constants';
import {ToggleGroup, ToggleGroupItem} from '../ui/toggle-group';
import {useTranslation} from 'react-i18next';

const LanguageSelector: React.FC = () => {
	const [language, setLanguage] = useState(en);

	const {t, i18n} = useTranslation();

	const handleLanguageChange = (lang: string) => {
		setLanguage(lang);
		i18n
			.changeLanguage(lang)
			.then(() => 'obligatory for @typescript-eslint/no-floating-promises')
			.catch(() => 'obligatory for @typescript-eslint/no-floating-promises');
	};

	return (
		<ToggleGroup
			type="single"
			value={language}
			onValueChange={handleLanguageChange}
			size={'sm'}
			className="text-white flex items-center space-x-1 text-sm">
			<ToggleGroupItem value={de} aria-label="Toggle german">
				<div className="uppercase">de</div>
			</ToggleGroupItem>
			<Separator orientation="vertical" className="h-5" />
			<ToggleGroupItem value={en} aria-label="Toggle english">
				<div className="uppercase">en</div>
			</ToggleGroupItem>
			<Separator orientation="vertical" className="h-5" />
			<ToggleGroupItem value={ch} aria-label="Toggle swiss german">
				<div className="uppercase">ch</div>
			</ToggleGroupItem>
		</ToggleGroup>
	);
};

export default LanguageSelector;
