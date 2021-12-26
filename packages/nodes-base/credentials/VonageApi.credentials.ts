import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class VonageApi implements ICredentialType {
	name = 'vonageApi';
	displayName = 'Vonage API';
	documentationUrl = 'vonage';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'API Secret',
			name: 'apiSecret',
			type: 'string',
			default: '',
		},
	];
}