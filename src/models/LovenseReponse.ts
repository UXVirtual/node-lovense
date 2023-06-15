class LovenseResponse {
    code: number;
    data?: LovenseResponseData;
    type: string;
}

class LovenseResponseData {
    toys?: string|LovenseToy[];
    platform?: LovensePlatform;
    appType?: LovenseAppType;

    mId?: string;
    mToken?: string;
}

enum LovensePlatform {
    PC = "pc",
    iOS = "ios",
    Android = "android",
}

enum LovenseAppType {
    Connect = "connect",
    Remote = "remote"
}