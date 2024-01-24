import ApiError from "@/utils/ApiError";
import * as process from "process";

export const ENVIRONMENT = process.env.APP_ENV || "development";
export const IS_PRODUCTION = ENVIRONMENT === "production";
export const IS_TEST = ENVIRONMENT === "test";
export const APP_PORT = Number(process.env.APP_PORT) || 9000;
export const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || "/";
export const JWT_SECRET = process.env.JWT_SECRET || "thT9x1TP9y2022Serv1ceis";
export const JWT_EXPIRE = process.env.JWT_EXPIRE || "1d";
export const DB = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_USER_PWD,
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
  PORT: Number(process.env.DB_PORT) || 27017,
};
export const DB_URI =
  process.env.DB_URI || "mongodb://localhost:27017/taxitpay";
export const APP_NAME = "Client Service";
export const APP_URL = process.env.APP_URL;
export const FRONT_END_URL = process.env.FRONT_END_URL;
export const PAYE_COST = process.env.PAYE_COST || 100;
export const POSTMARK_MAIL_URL = process.env.POSTMARK_MAIL_URL;
export const POSTMARK_MAIL_TOKEN = process.env.POSTMARK_MAIL_TOKEN;
export const POSTMARK_MAIL_FROM = process.env.POSTMARK_MAIL_FROM;

export const EBULK_URL = process.env.EBULK_URL;
export const EBULK_API_KEY = process.env.EBULK_API_KEY;
export const EBULK_EMAIL = process.env.EBULK_EMAIL;
export const EBULK_SENDER_NAME = process.env.EBULK_SENDER_NAME;
export const EBULK_USERNAME = process.env.EBULK_USERNAME;

export const MONNIFY_URL = process.env.MONNIFY_URL;
export const MONNIFY_API_KEY = process.env.MONNIFY_API_KEY;
export const MONNIFY_SECRET_KEY = process.env.MONNIFY_SECRET_KEY;
export const MONNIFY_CONTRACT_CODE = process.env.MONNIFY_CONTRACT_CODE;
export const MONNIFY_ACCOUNT_NUMBER = process.env.MONNIFY_ACCOUNT_NUMBER;

export const TAXTECH_WALLET = process.env.TAXTECH_WALLET;
export const PROFESSIONAL_WALLET = process.env.PROFESSIONAL_WALLET;
export const TECH_PROJECT_EMAIL = process.env.TECH_PROJECT_EMAIL;
export const PROFESSIONAL_EMAIL = process.env.PROFESSIONAL_EMAIL;
export const PAYROLL_EMAIL = process.env.PAYROLL_EMAIL;

export const DEFINED_COST = {
  PAYE_COST: process.env.PAYE_COST,
  NHIS_COST: process.env.NHIS_COST,
  NHS_COST: process.env.NHS_COST,
};
/*PFAs*/
export const PFA_ARM = "ARM Pension Managers Limited";
export const PFA_CSP = "CrusaderSterling Pensions Limited";
export const PFA_DEMO = "Taxaide Technologies Test PFA Limited";
export const PFA_FCMB = "FCMB Pensions Limited";
export const PFA_FGP = "First Guarantee Pension Limited";
export const PFA_FPM = "Fidelity Pension Managers Limited";
export const PFA_FUGP = "Future Unity Glanvils Pensions Limited";
export const PFA_IBTC = "Stanbic IBTC Pension Managers Limited";
export const PFA_IEI = "IEI-Anchor Pension Managers Limited";
export const PFA_GTPM = "Guaranty Trust Pension Managers Limited";
export const PFA_LPM = "Legacy Pension Managers Limited";
export const PFA_LPP = "Leadway Pensure PFA Limited";
export const PFA_NLPC = "NLPC Pension Fund Administrators Limited";
export const PFA_OAK = "Oak Pensions Limited";
export const PFA_PAL = "Pensions Alliance Limited";
export const PFA_PPL = "Premium Pension Limited";
export const PFA_RPF = "Radix Pension Fund Managers Limited";
export const PFA_SPL = "Sigma Pensions Limited";
export const PFA_TPL = "Trustfund Pensions Limited";
export const PFA_TANG = "Tangerine APT Pensions Limited";
export const PFA_VGP = "Veritas Glanvills Pensions Limited";

export const PFAs = [
  "ARM Pension Managers Limited",
  "CrusaderSterling Pensions Limited",
  "Taxaide Technologies Test PFA Limited",
  "FCMB Pensions Limited",
  "First Guarantee Pension Limited",
  "Fidelity Pension Managers Limited",
  "Future Unity Glanvils Pensions Limited",
  "Stanbic IBTC Pension Managers Limited",
  "IEI-Anchor Pension Managers Limited",
  "Guaranty Trust Pension Managers Limited",
  "Legacy Pension Managers Limited",
  "Leadway Pensure PFA Limited",
  "NLPC Pension Fund Administrators Limited",
  "Oak Pensions Limited",
  "Pensions Alliance Limited",
  "Premium Pension Limited",
  "Radix Pension Fund Managers Limited",
  "Sigma Pensions Limited",
  "Trustfund Pensions Limited",
  "Tangerine APT Pensions Limited",
  "Veritas Glanvills Pensions Limited",
];

export const PENSION_EMAIL_TEXT =
  "Please be informed of a pension contribution made to your pension fund custodian on behalf of the above mentioned employer. A copy of the contribution schedule is attached herewith. Any problems or concerns should be forwarded to tech@taxtech.com.ng";

// export const EMAIL_AIICO = {to: ['schedules@aiicopension.com'], cc: ['m.shehu@taxaide.com.ng']};
// export const EMAIL_APT = {to: ['collectionunit@aptpensions.com'], cc: ['m.shehu@taxaide.com.ng', 'omolara.f.olaniyan@firstpensioncustodian.com', 'eunice.sunny@firstpensioncustodian.com', 'info@aptpensions.com']};
// export const EMAIL_ARM = {to: ['e-contributionspfc@ubagroup.com'], cc: ['m.shehu@taxaide.com.ng', 'upclcontributions@ubagroup.com', 'Adeola.Fakoya@armpension.com', 'contributions.pension@armpension.com', 'employermanagement@armpension.com', 'UPCLPaymentMonitoring@ubagroup.com', 'econtribution.arm@ubagroup.com']};
// export const EMAIL_AXA = {to: ['pensioncare@axamansard.com'], cc: ['m.shehu@taxaide.com.ng', 'pensioncare@axamansard.com','contri.schedule@axamansard.com','UPCLPaymentMonitoring@ubagroup.com', 'Contri.schedule@axamansard.com', 'e-contributionspfc@ubagroup.com']};
// export const EMAIL_CSP = {to: ['schedules@crusaderpensions.com'], cc: ['m.shehu@taxaide.com.ng', 'omolara.f.olaniyan@firstpensioncustodian.com', 'eunice.sunny@firstpensioncustodian.com', 'info@crusaderpensions.com']};
// export const EMAIL_DEMO = {to: ['m.shehu@taxaide.com.ng'], cc: ['o.onakomaiya@taxaide.com.ng']};
// export const EMAIL_FCMB = {to: ['econtributions@fcmbpensions.com'], cc: ['m.shehu@taxaide.com.ng', 'christiana.nwosu@ubagroup.com', 'info@fcmbpensions.com']};
// export const EMAIL_FGP = {to: ['contributions@firstguaranteepension.com'], cc: ['m.shehu@taxaide.com.ng', 'inana@firstguaranteepension.com', 'omolara.f.olaniyan@firstpensioncustodian.com', 'eunice.sunny@firstpensioncustodian.com']};
// export const EMAIL_FPM = {to: ['info@fidelitypensionmanagers.com'], cc: ['m.shehu@taxaide.com.ng', 'contributions@fidelitypensionmanagers.com', 'omolara.f.olaniyan@firstpensioncustodian.com', 'eunice.sunny@firstpensioncustodian.com']};
// export const EMAIL_FUGP = {to: ['schedules@fugpensions.com'], cc: ['m.shehu@taxaide.com.ng', 'info@fugpensions.com']};
// export const EMAIL_IBTC = {to: ['ibtccollections@zenithcustodian.com'], cc: ['m.shehu@taxaide.com.ng','dami.subair@stanbicibtc.com', 'ifeanyi.akintan@zenithcustodian.com', 'pensioncontribution@stanbicibtc.com', 'chioma.obasi@stanbicibtc.com', 'SIPMLRMGSupport@stanbicibtc.com', 'james.ajani@zenithcustodian.com', 'zpcenquiries@zenithcustodian.com']};
// export const EMAIL_IEI = {to: ['morufat.sheriff@ubagroup.com', 'cservice@ieianchorpensions.com'], cc: ['m.shehu@taxaide.com.ng', 'upclpaymentmonitoring@ubagroup.com'  , 'e-contributionspfc@ubagroup.com'  , 'upclcontributions@ubagroup.com']};
// export const EMAIL_IOPM = {to: ['emmanuel.okoh@investment-onepension.com'], cc: ['m.shehu@taxaide.com.ng', 'enquiries@investment-onepension.com']};
// export const EMAIL_LPM = {to: ['econtributions@legacypension.com'], cc: ['m.shehu@taxaide.com.ng', 'UPCLPaymentMonitoring@ubagroup.com', 'info@legacypension.com']};
// export const EMAIL_LPP = {to: ['contributions@leadway-pensure.com'], cc: ['m.shehu@taxaide.com.ng', 'UPCLPaymentMonitoring@ubagroup.com', 'a-oshiyemi@leadway-pensure.com']};
// export const EMAIL_NLPC = {to: ['operations@nlpcpfa.com'], cc: ['m.shehu@taxaide.com.ng', 'omolara.f.olaniyan@firstpensioncustodian.com', 'eunice.sunny@firstpensioncustodian.com', 'customercare@nlpcpfa.com', 'fpcnl.collectionsstaff@firstpensioncustodian.com']};
// export const EMAIL_OAK = {to: ['fpcnl.operations@firstpensioncustodian.com'], cc: ['m.shehu@taxaide.com.ng', 'omolara.f.olaniyan@firstpensioncustodian.com', 'eunice.sunny@firstpensioncustodian.com', 'info@oakpensions.com']};
// export const EMAIL_PAL = {to: ['employerservices@palpensions.com'], cc: ['m.shehu@taxaide.com.ng', 'Augusta.Ifeanyichukwu@palpensions.com', 'UPCLPaymentMonitoring@ubagroup.com', 'schedules@palpensions.com', 'love.osadebe@palpensions.com', 'tosin.salami@palpensions.com', 'rmikoyi@palpensions.com']};
// export const EMAIL_PPL = {to: ['pplcontributions@premiumpension.com'], cc: ['m.shehu@taxaide.com.ng', 'fpcnl.operations@firstpensioncustodian.com', 'csu@premiumpension.com']};
// export const EMAIL_RPF = {to: ['contribution@radixpension.com'], cc: ['m.shehu@taxaide.com.ng', 'UPCLPaymentMonitoring@ubagroup.com', 'e-contributionspfc@ubagroup.com']};
// export const EMAIL_SPL = {to: ['info@sigmapensions.com'], cc: ['m.shehu@taxaide.com.ng', 'UPCLPaymentMonitoring@ubagroup.com', 'babaaf@sigmapensions.com', 'sannib@sigmapensions.com']};
// export const EMAIL_TPL = {to: ['collections@trustfundpensions.com'], cc: ['m.shehu@taxaide.com.ng', 'tfpencollect@zenithcustodian.com']};
// export const EMAIL_VGP = {to: ['info@vgpensions.com'], cc: ['m.shehu@taxaide.com.ng', 'omolara.f.olaniyan@firstpensioncustodian.com', 'eunice.sunny@firstpensioncustodian.com', 'schedules@vgpensions.com']};
// export const EMAIL_TANG = {to: ['enoemem@tangerine.africa'], cc: ['m.shehu@taxaide.com.ng','pensioncare@Tangerine.Africa',  'Contri.schedule@Tangerine.Africa', 'e-contributionspfc@ubagroup.com'  , 'Pensionscontributions@tangerine.africa']};

export const Monnify: any = {
  URL: process.env.MONNIFY_URL,
  API_KEY: process.env.MONNIFY_API_KEY,
  SECRET_KEY: process.env.MONNIFY_SECRET_KEY,
  CONTRACT_CODE: process.env.MONNIFY_CONTRACT_CODE,
  ACCOUNT_NUMBER: process.env.MONNIFY_ACCOUNT_NUMBER,
};

export const TERMII = {
  URL: process.env.TERMII_URL,
  API_KEY: process.env.TERMII_API_KEY,
  FROM: process.env.TERMII_FROM,
};

export const HOLLATAGS = {
  URL: process.env.HOLLATAGS_URL,
  USERNAME: process.env.HOLLATAGS_USERNAME,
  PASSWORD: process.env.HOLLATAGS_PASSWORD,
  FROM: process.env.HOLLATAGS_FROM || "Taxtech",
};

export const SMS_SERVICE_PROVIDER = process.env.SMS_SERVICE_PROVIDER;

export const breakPoint = () => {
  throw new ApiError(200, "break point");
};

// interswitcher details
export const INTERSWITCH = {
  url: process.env.INTERSWITCH_URL,
  system_id: process.env.SYSTEM_ID,
  password: process.env.PASSWORD,
  source: process.env.SOURCE,
};
export const PAYMENT_SERVICE_SECRET_KEY =
  process.env.PAYMENT_SERVICE_SECRET_KEY;
export const HEADER_NAME = process.env.HEADER_NAME;
