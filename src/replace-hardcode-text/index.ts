import texts from './en';

const findText = (key: string): string => texts[key] || 'your key not found';

export default findText;
