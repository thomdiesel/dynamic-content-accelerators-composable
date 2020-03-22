import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

import cardListStyles from './product-list.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "ulta-poc---product-list",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-list.json",
            "deliveryId": "b6544bfc-101b-4e6b-98d9-0469d396e005"
        },
        "cards": [
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-clinique",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "38da95e2-0fb2-4335-a865-1f550cc05618"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "c80f71ee-791d-4f04-be06-67efeab8eb06",
                        "name": "wk0320_nld_clinique",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "971ecbe7-2230-4fd7-b7b4-77978c502fef",
                    "name": "wk0320_nld_clinique_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                },
                "roundel": [
                {
                    "roundel":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "547b1756-4081-4a20-ba97-95c3083147d6",
                        "name": "badge-whats-new",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "roundelRatio": 0.2,
                    "roundelPosition": "Top Left"
                }]
            },
            "cardPromo": "Free Gift",
            "cardBrand": "CLINIQUE",
            "cardProduct": "Full-Size Eyeliner with any Full-Size Clinique Mascara purchase",
            "cardPrice": "up to a $22 value"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "694152f4-4f28-45d2-93a6-38473ba8f509"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "10e51c9c-1c7f-4b2e-ae80-512a2b93770e",
                        "name": "wk0320_nld_ardell",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "d97bdfc6-21c1-478b-9dd8-f1067e4c6736",
                    "name": "wk0320_nld_ardell_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "ARDELL",
            "cardProduct": "Lashes"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-kiss",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "88695d04-ee1f-4375-b14b-8708de9ec657"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "2528bda3-3ec4-447d-b82d-678121281d89",
                        "name": "wk0320_nld_kiss",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "3a1579d7-ded6-4c8b-b7ce-bc90b3b9a2aa",
                    "name": "wk0320_nld_kiss_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "KISS",
            "cardProduct": "Lashes"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-eyelure",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "972952c9-48a3-4877-a5ed-1ce24d970d09"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "b95475fa-6594-4835-990e-465e4897ba92",
                        "name": "wk0320_nld_eylure",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "378e7538-6567-4708-8b1c-9cf0a1e16bfb",
                    "name": "wk0320_nld_eylure_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "EYLURE",
            "cardProduct": "Lashes"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-house-of-lashes",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "93c129ed-1cda-4847-b0ff-f653b515c621"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "11032224-2cd6-4b53-af8f-47b5159ec01a",
                        "name": "wk0320_nld_houseoflashes",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "2c92650d-5014-4cda-8585-2c66cc134ca6",
                    "name": "wk0320_nld_houseoflashes_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "HOUSE OF LASHES",
            "cardProduct": "Lashes",
            "cardPrice": "now $8.40"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-lilly-lashes",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "4cbf6ebe-71c3-4ffc-ad17-9804802ba257"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "9db11b22-2ca0-4106-85d0-da82d8d10ac0",
                        "name": "wk0320_nld_lillylashes",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "443bd005-0022-4108-83ba-c4d7e57216ec",
                    "name": "wk0320_nld_lillylashes_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "LILLY LASHES",
            "cardProduct": "Lashes",
            "cardPrice": "now $18.20"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-velour-lashes",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "c964c803-6848-463e-846b-e1c3c5b5aa25"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "eeb3e904-520b-4bf3-88ff-eb4abb21e680",
                        "name": "wk0320_nld_velourlashes",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "c8a7021d-4e81-4ff7-9a66-1adc3ef0f807",
                    "name": "wk0320_nld_velourlashes_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "VELOUR LASHES",
            "cardProduct": "Lashes",
            "cardPrice": "now $18.20"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-tarte-lashes",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "9cb714ea-2c9d-46bc-8bcb-a1958db0b371"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "c754f49e-b0b5-4fb6-8959-f958001fa258",
                        "name": "wk0320_nld_tarte",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "8060a7a0-169e-4f5d-aa5c-d78cd5e6a018",
                    "name": "wk0320_nld_tarte_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "TARTE LASHES",
            "cardProduct": "Lashes",
            "cardPrice": "now $8.40"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---simple-card-example",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/simple-card.json",
                "deliveryId": "d4a64b5e-3b2b-4033-b6a6-0c720cb3fdcb"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "219ebe4f-4006-44fd-9134-30f253b8ce45",
                        "name": "wk0320-nld-pro-tip-2",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": true,
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                },
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "1771369c-3a96-4854-8411-d7b696f2bfea",
                    "name": "wk0320-nld-pro-tip-2_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                }
            }
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-pur-lashes",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "a0e6a524-f2f0-4fe1-97ca-33bf80c8eb7b"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "ba237971-6829-4eb3-ab2d-03b39bebd522",
                        "name": "wk0320_nld_pur",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "3d35f8e7-b686-4156-83fa-7a7028ea0af0",
                    "name": "wk0320_nld_pur_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "PÜR LASHES",
            "cardProduct": "Lashes",
            "cardPrice": "now $9.80"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-blinking-beaut-lashes",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "c6acd9ea-a476-470a-8ece-4a6a5fa6f6e4"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "48d95858-ea3e-4bc2-a288-af29c5247597",
                        "name": "wk0320_nld_blinkingbeaute",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "b8a52d0a-d88f-455d-99f4-ed90883a4b4b",
                    "name": "wk0320_nld_blinkingbeaute_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "30% Off",
            "cardBrand": "BLINKING BEAUTÉ LASHES",
            "cardProduct": "Lashes",
            "cardPrice": "now $18.20"
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-card---wk0320-nld-beautygarde",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                "deliveryId": "f45e2740-2820-465a-98d2-68e8a877f192"
            },
            "image":
            {
                "image":
                {
                    "crop": [0, 0, 0, 0],
                    "rot": 0,
                    "hue": 0,
                    "sat": 0,
                    "bri": 0,
                    "fliph": false,
                    "flipv": false,
                    "poi":
                    {
                        "x": -1,
                        "y": -1
                    },
                    "aspectLock": "clear",
                    "image":
                    {
                        "_meta":
                        {
                            "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                        },
                        "id": "f7891f38-44cd-473d-87d1-51ff5672a25f",
                        "name": "wk0320_nld_beautygarde",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "a71d8266-2c0a-4925-b1cb-dd9a6498b311",
                    "name": "wk0320_nld_beautygarde_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            },
            "cardPromo": "online only 30% Off",
            "cardBrand": "BLINKING BEAUTÉ LASHES",
            "cardProduct": "Entire Brand"
        }]
    }
};

storiesOf('Product List', module)
  .add('Example content', () => renderContent('ultapoc-template-product-list', sampleContent));