const ExampleContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "number",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getCount",
                "inputs": [],
                "outputs": [
                    {
                        "name": "count",
                        "type": "uint256"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_count",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECEQEAAa4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsOBQQQApDtRNDXScMB+GYh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwIBgJc7UTQ10nDAfhmItDXCwOpOADcIccAIJ8wIdcNH/K8IcAAIJJsId7f4wIB2zzyPAsGAiggghBobz4luuMCIIIQbluPbLrjAgkHAiow+EJu4wD4RvJz0wfR+AD4ats88gAIDAFE7UTQ10nCAY4XcO1E0PQFcPhqgED0DvK91wv/+GJw+GPjDQ0DaDD4RvLgTPhCbuMA0ds8IY4cI9DTAfpAMDHIz4cgzoIQ6G8+Jc8Lgcv/yXD7AJEw4uMA8gANCgwABPhKAiL4RvLgTPhCbuMA+Eqk+GrbPA0MACT4SvhD+ELIy//LP8+Dy//J7VQAJu1E0NP/0z/TADHT/9H4avhj+GICEPSkIPS98sBOEA8AFHNvbCAwLjY5LjAAAA==",
    code: "te6ccgECDgEAAYEABCSK7VMg4wMgwP/jAiDA/uMC8gsLAgENApDtRNDXScMB+GYh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwFAwJc7UTQ10nDAfhmItDXCwOpOADcIccAIJ8wIdcNH/K8IcAAIJJsId7f4wIB2zzyPAgDAiggghBobz4luuMCIIIQbluPbLrjAgYEAiow+EJu4wD4RvJz0wfR+AD4ats88gAFCQFE7UTQ10nCAY4XcO1E0PQFcPhqgED0DvK91wv/+GJw+GPjDQoDaDD4RvLgTPhCbuMA0ds8IY4cI9DTAfpAMDHIz4cgzoIQ6G8+Jc8Lgcv/yXD7AJEw4uMA8gAKBwkABPhKAiL4RvLgTPhCbuMA+Eqk+GrbPAoJACT4SvhD+ELIy//LP8+Dy//J7VQAJu1E0NP/0z/TADHT/9H4avhj+GICEPSkIPS98sBODQwAFHNvbCAwLjY5LjAAAA==",
    codeHash: "56a54d2d8859ecc190c92b20700b2e2bbef6e2bc9a93420b232bbe2a0fbd1617",
};
export default ExampleContract;