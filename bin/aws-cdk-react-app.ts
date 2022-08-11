#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkReactAppStack } from '../lib/aws-cdk-react-app-stack';

const app = new cdk.App();
new AwsCdkReactAppStack(app, 'AwsCdkReactAppStack', {});
