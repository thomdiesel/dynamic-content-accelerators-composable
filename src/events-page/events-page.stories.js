import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

import pageStyles from './events-page.scss';

export const sampleContent = {
    "content":
    {
        "_meta":
        {
            "name": "ulta-poc---events-page",
            "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/events-page.json",
            "deliveryId": "c8ebadef-e9bc-422d-8c36-cef6e27de881"
        },
        "contentTypes": [
        {
            "_meta":
            {
                "name": "ulta-poc---simple-banner",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/simple-banner.json",
                "deliveryId": "89356c3c-64a3-4202-b6a7-109255d2b310"
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
                        "id": "44cdd91e-b053-4a14-8edb-65cc243d4a47",
                        "name": "wk0320_nld_freegift",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    }
                },
                "gifImage": false,
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                },
                "imageAltText": "Example Alt Text",
                "seoText": "example-SEO-Text",
                "mobileImage":
                {
                    "_meta":
                    {
                        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
                    },
                    "id": "4ac92150-8930-428d-b45b-a44a16ab94c7",
                    "name": "wk0320_nld_freegift_m_1",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                }
            }
        },
        {
            "_meta":
            {
                "name": "ulta-poc---header--subheader",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/header-subheader.json",
                "deliveryId": "519dca5b-4f83-4898-a4b1-43ba7d7da6c3"
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
                        "id": "ef9e8a05-7635-40d8-abd9-e87e63843aa0",
                        "name": "wk0320_nld_lashes_title",
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
                    "id": "e4fd4fd3-ddc6-4a2b-82a3-07291310dc8e",
                    "name": "wk0320_nld_lashes_title_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            }
        },
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
        },
        {
            "_meta":
            {
                "name": "ulta-poc---mascara-header--subheader",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/header-subheader.json",
                "deliveryId": "21279b37-0a15-4a2e-a65d-df9ca5a6293e"
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
                        "id": "cc597cb3-b2fe-4423-8ab7-93373c5e1e57",
                        "name": "wk0320_nld_mascara_title",
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
                    "id": "f2583a0c-9f97-46dc-99d3-109bb3417f76",
                    "name": "wk0320_nld_mascara_title_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            }
        },
        {
            "_meta":
            {
                "name": "ulta-poc---nld-header",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/header-subheader.json",
                "deliveryId": "280e4de7-1ae7-46d1-a3f9-951fd0952381"
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
                        "id": "d92b8f5a-2e66-45af-904f-6ab1a1323de8",
                        "name": "wk0320-nld-header",
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
                    "id": "faf35e25-6c97-4732-91ed-c8bfde50453d",
                    "name": "wk0320-nld-header_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            }
        },
        {
            "_meta":
            {
                "name": "ulta-poc---product-list",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-list.json",
                "deliveryId": "bb228580-0c2d-4867-a457-8389c60a6b9e"
            },
            "cards": [
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-mascara-benefit",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "5c3a71df-6b64-4964-b9d4-b183b8fca200"
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
                            "id": "6ebe286e-0594-4009-8d47-15a6790ee014",
                            "name": "wk0320_nld_benefit",
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
                        "id": "9d4124c5-59c6-473b-b316-021feb4d5203",
                        "name": "wk0320_nld_benefit_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "50% Off",
                "cardBrand": "BENEFIT",
                "cardProduct": "Roler Lash Curling & Lifting Mascara",
                "cardPrice": "now $12.50"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-mascara-benefit",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "c4c49035-ecbe-4e43-a391-1d4e7cb16d38"
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
                            "id": "c7ea7051-bab8-436f-a0aa-82963de3c9d6",
                            "name": "wk0320_nld_ubc",
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
                        "id": "dfab1e3b-47f6-43db-9fdc-5e105afb2bfc",
                        "name": "wk0320_nld_ubc_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "50% Off",
                "cardBrand": "ULTA BEAUTY COLLECTION",
                "cardProduct": "Mascara",
                "cardPrice": "cannot be combined with any other offer"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-mascara-nyx",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "97658b53-c99f-4a21-b6d8-c9e965b940ce"
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
                            "id": "3d28ff9b-537e-4dc0-b422-deea1139f995",
                            "name": "wk0320_nld_nyx",
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
                        "id": "d8c05330-e707-4863-b3dc-436713e56835",
                        "name": "wk0320_nld_nyx_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "30% Off",
                "cardBrand": "NYX PROFESSIONAL MAKEUP",
                "cardProduct": "Mascara"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-mascara-covergirl",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "144f83a6-bacf-4016-b64b-87a38d3677c1"
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
                            "id": "aa5df300-0baf-4204-afdc-831c4a211f28",
                            "name": "wk0320_nld_covergirl",
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
                        "id": "f29be4d4-55da-40ae-9ca4-8158cc72fb2c",
                        "name": "wk0320_nld_covergirl_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "40% Off",
                "cardBrand": "COVERGIRL",
                "cardProduct": "Mascara"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-mascara-essence",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "79dd00aa-756e-4e91-a5a1-348f6eacb4ca"
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
                            "id": "87f1aa5c-0410-4b3d-a688-f9ce1c0eb4cd",
                            "name": "wk0320_nld_essence",
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
                        "id": "699799fe-5f64-420e-9cb8-903ef52d556a",
                        "name": "wk0320_nld_essence_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "40% Off",
                "cardBrand": "ESSENCE",
                "cardProduct": "Mascara"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-mascara-physicians-formula-wet-n-wild",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "16ab58ad-09f3-465d-ac75-0ab01ec2e697"
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
                            "id": "13c3b43f-bdda-4976-a8e0-cdb6f53ae824",
                            "name": "wk0320_nld_physicians",
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
                        "id": "f9f86264-3272-405c-a50c-37d2b73eca22",
                        "name": "wk0320_nld_physicians_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "40% Off",
                "cardBrand": "PHYSICIANS FORMULA WET N WILD",
                "cardProduct": "Mascara"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-mascara-milani",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "719239c7-dfe7-4e62-8173-064209666db7"
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
                            "id": "ac4056ac-9cc1-4277-bc8a-685d5f51e060",
                            "name": "wk0320_nld_milani",
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
                        "id": "0db400d4-dec1-4b12-9bc5-a8d479be0ff3",
                        "name": "wk0320_nld_milani_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "30% Off",
                "cardBrand": "MILANI",
                "cardProduct": "Mascara"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-mascara-pacifica",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "6bca2383-4644-4952-997b-e91302112e36"
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
                            "id": "1ea4a860-0e0a-4d58-bbe1-a29bc17698ac",
                            "name": "wk0320_nld_pacifica",
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
                        "id": "5e39537f-578c-454d-a420-afec33f117f5",
                        "name": "wk0320_nld_pacifica_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "30% Off",
                "cardBrand": "PACIFICA",
                "cardProduct": "Mascara"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---simple-card---pro-tip-2",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/simple-card.json",
                    "deliveryId": "aa3471f6-b214-4b93-8364-382986aca263"
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
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                }
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-colourpop",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "4c707f69-fd6d-48de-92bf-ea583df62f4e"
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
                            "id": "30610209-301a-4c55-bbea-65a40fc3f04a",
                            "name": "wk0320_nld_colourpop",
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
                        "id": "ad3874e9-be86-47cd-833d-29f85e01a468",
                        "name": "wk0320_nld_colourpop_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "30% Off",
                "cardBrand": "COLOURPOP",
                "cardProduct": "BFF Mascara",
                "cardPrice": "now $5.60"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-florence-by-mills",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "c498b3c8-c010-42c4-8ab2-3fd4031e34d5"
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
                            "id": "62c02353-c226-4cdb-b3b1-01405a24b213",
                            "name": "wk0320_nld_florence",
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
                        "id": "29c40756-f15f-45fe-9888-47862e81acbf",
                        "name": "wk0320_nld_florence_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "50% Off",
                "cardBrand": "FLORENCE BY MILLS",
                "cardProduct": "Built to Lash Mascara",
                "cardPrice": "now $7"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-pixi",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "40efe57b-8080-4138-a06a-ec3e4147b1ff"
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
                            "id": "2fda44da-8057-4779-a85c-d1edeba11d64",
                            "name": "wk0320_nld_pixie",
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
                        "id": "a98f9bb3-d580-43a1-9fee-47ef16e98280",
                        "name": "wk0320_nld_pixie_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "30% Off",
                "cardBrand": "PIXI",
                "cardProduct": "Large Lash Mascara",
                "cardPrice": "now $11.20"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-grande-cosmetics",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "d357b35d-4ebd-4b93-ab37-cd58f0938eab"
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
                            "id": "aa6498fb-1dee-42ad-8323-6f826c152414",
                            "name": "wk0320_nld_grandecosmetics",
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
                        "id": "ce297494-d897-4a04-99fd-86e44c040332",
                        "name": "wk0320_nld_grandecosmetics_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "online only 30% Off",
                "cardBrand": "GRANDE COSMETICS",
                "cardProduct": "Mascaras and Primer",
                "cardPrice": "now $17.50"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-loréal-and-maybelline",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "5986bf75-8316-457e-bf78-a6dc3b26d220"
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
                            "id": "df493a16-1762-4bbb-8c55-b37b2bbb0763",
                            "name": "wk0320_nld_lorealmaybe",
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
                        "id": "0ba4de97-394e-4145-9061-bbfdaeaba772",
                        "name": "wk0320_nld_lorealmaybe_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "online only 30% Off",
                "cardBrand": "L'ORÉAL AND MAYBELLINE",
                "cardProduct": "Select Mascara"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-elcie-cosmetics-petite-'n-pretty,-zoeva-&-nabla",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "f76404b1-2638-4c0c-9c8e-6579fde81ac0"
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
                            "id": "2a9cf7b2-4c9e-4564-a194-2b41829c1746",
                            "name": "wk0320_nld_elciezoeva",
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
                        "id": "b7b19d87-f82e-4dba-9473-a337d1856423",
                        "name": "wk0320_nld_elciezoeva_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "online only 30% Off",
                "cardBrand": "ELCIE COSMETICS, PETITE 'N PRETTY, ZOEVA & NABLA",
                "cardProduct": "Mascara"
            },
            {
                "_meta":
                {
                    "name": "ulta-poc---product-card---wk0320-nld-eyeko",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-card.json",
                    "deliveryId": "338fc972-ac39-46e1-91f4-c94fe813c13d"
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
                            "id": "2c1fe036-6eba-42bd-9d5c-62d368b776cd",
                            "name": "wk0320_nld_eyeko",
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
                        "id": "0966058d-36ee-4f9d-b665-356ad55feca5",
                        "name": "wk0320_nld_eyeko_m",
                        "endpoint": "ultapoc",
                        "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                    },
                    "_meta":
                    {
                        "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                    }
                },
                "cardPromo": "online only 40% Off",
                "cardBrand": "EYEKO",
                "cardProduct": "Mascara"
            }]
        },
        {
            "_meta":
            {
                "name": "ulta-poc---gwp-header--subheader",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/header-subheader.json",
                "deliveryId": "c3039960-3e8b-4a78-8fad-2daf15656887"
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
                        "id": "879ce2a4-874a-49d7-aa74-37a537ad7d78",
                        "name": "wk0320_nld_gwp_title",
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
                    "id": "8eb7120d-c38f-4f29-bd93-adc49c3419ff",
                    "name": "wk0320_nld_gwp_title_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "_meta":
                {
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json"
                }
            }
        },
        {
            "_meta":
            {
                "name": "ulta-poc---content-block",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/content-block.json",
                "deliveryId": "74a05940-824d-433a-be0d-1361d72728c3"
            },
            "content": [
            {
                "_meta":
                {
                    "name": "ulta-poc---bopis-image",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json",
                    "deliveryId": "6d00759f-229b-4991-b107-6e61037fc6e9"
                },
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
                        "id": "ab2c9f76-1ee8-4c27-b0bd-ffa627ef8f60",
                        "name": "wk0320_nld_bopis",
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
                    "id": "3ab0df00-1c82-45de-b304-cb16a2cb6717",
                    "name": "wk0320_nld_bopis_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                }
            },
            {
                "_meta":
                {
                    "name": "ulta-poc--credit-card-image",
                    "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators/ultapoc/contentSchemas/ulta-image.json",
                    "deliveryId": "6c8ae50d-4e8e-4fc6-bfbf-4046da727a3f"
                },
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
                        "id": "b99ebb82-ea83-488d-8ab6-993ff8038e68",
                        "name": "wk0320_nld_creditcard",
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
                    "id": "3d179037-7745-4673-a87b-41afd2d90dc7",
                    "name": "wk0320_nld_creditcard_m",
                    "endpoint": "ultapoc",
                    "defaultHost": "x33ootx5v6ks1c3t0t9xfq1xl.staging.bigcontent.io"
                },
                "imageAltText": "creditcard",
                "seoText": "creditcard"
            }],
            "split": "50/50"
        },
        {
            "_meta":
            {
                "name": "ulta---product-selector",
                "schema": "https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/ultapoc/contentSchemas/product-selector",
                "deliveryId": "55544eaa-f986-4ed2-8d80-e956e53c669b"
            },
            "products": [
            {
                "id": "64e37229-8922-4c37-8413-1007df2ebc29"
            },
            {
                "id": "c846bb63-21a6-4542-9b58-8da32ad50f7f"
            },
            {
                "id": "5561e03a-c35a-4033-8b69-f186f72cde56"
            }]
        }]
    }
};

storiesOf('Events Page', module)
  .add('Example content', () => renderContent('ultapoc-template-events-page', sampleContent.content));