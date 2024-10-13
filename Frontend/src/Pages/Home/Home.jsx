import { isDarkTheme } from "@Services/AppService"
import "./Home.scss"
import { Outlet } from "react-router-dom"

export default function Home(){

    return(
        <main>
            <svg className={`${isDarkTheme() ? "darkTheme" : ""} theme`} width="114" height="105" viewBox="0 0 114 105" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_4_32)">
                <path d="M32.4789 52.6208C32.1134 53.3513 31.7852 54.0277 31.4944 54.6499C31.2037 55.2722 30.9115 55.9124 30.618 56.5708C29.1586 59.718 27.846 62.918 26.6801 66.1708C25.537 69.2999 24.6453 72.5157 24.0134 75.7874L23.9428 76.2083C23.652 78.1111 23.4512 80.0138 23.3404 81.9166C23.2338 83.9199 23.4484 85.9274 23.976 87.8624L23.9469 87.7291C24.2169 89.1791 24.9189 90.4333 25.9117 91.3833L25.9158 91.3874C26.8837 92.2208 28.1423 92.7374 29.5214 92.7583C30.2306 92.8339 30.9514 92.7945 31.6481 92.6416L31.6066 92.6499L33.5755 92.2124C35.4323 91.6708 37.044 90.9583 38.5435 90.0708L38.4438 90.1249C39.9392 89.2472 41.4166 88.2958 42.876 87.2708C43.2047 87.0606 43.5613 86.8979 43.9352 86.7874L43.9684 86.7791C44.3687 86.6687 44.7935 86.6892 45.1814 86.8374L45.1689 86.8333C45.5327 86.9546 45.8585 87.1692 46.1142 87.4556C46.37 87.7421 46.5467 88.0906 46.6269 88.4666L46.6311 88.4791C46.7281 88.8406 46.7124 89.2233 46.5861 89.5756C46.4599 89.9279 46.2291 90.2331 45.9249 90.4499L45.9208 90.4541C43.794 92.0749 41.3972 93.6041 38.8717 94.9291L38.5892 95.0624C36.1384 96.3374 33.2474 97.1041 30.1777 97.1458H30.1652C27.8922 97.2836 25.6414 96.6302 23.7932 95.2958L23.8223 95.3166C22.0301 93.971 20.699 92.1 20.0132 89.9624L19.9924 89.8874C19.3483 88.1402 18.9797 86.3028 18.9 84.4416V84.4041C18.8176 82.5162 18.8954 80.6246 19.1326 78.7499L19.116 78.9166C19.818 73.0749 21.1846 67.7583 23.1535 62.7458L22.9998 63.1874C25.0313 57.8872 27.3983 52.7225 30.0863 47.7249L29.7291 48.4499C29.9304 48.0797 30.0428 47.6673 30.0572 47.2458C30.0506 46.8247 29.9734 46.4036 29.8288 46.0083L29.8371 46.0333C29.1808 44.2055 28.5604 42.3763 27.9761 40.5458L26.2274 35.0583C26.219 34.9186 26.1827 34.7821 26.1207 34.6568C26.0586 34.5315 25.972 34.4201 25.866 34.3291C25.6074 34.2059 25.3117 34.1865 25.0394 34.2749L25.0477 34.2708C22.5692 34.8569 20.1254 35.5333 17.7161 36.2999C15.2555 37.0812 12.8853 38.1247 10.6463 39.4124L10.8208 39.3208C9.94769 39.8354 9.11331 40.4133 8.32429 41.0499L8.36168 41.0208C7.57944 41.6577 6.83074 42.335 6.1186 43.0499C5.1073 44.0329 4.48593 45.3506 4.36983 46.7583V46.9374C4.36983 48.3749 4.86414 49.6999 5.69491 50.7416L5.6866 50.7291C6.47029 51.9486 7.40906 52.9847 8.50291 53.8374L8.53198 53.8583C9.62583 54.6999 10.7557 55.4861 11.9215 56.2166C12.3591 56.4361 12.7606 56.6555 13.1261 56.8749L14.2186 57.5333C14.7405 57.8383 15.139 58.3176 15.3443 58.8874L15.3484 58.9041C15.4402 59.1668 15.4726 59.4466 15.4431 59.7234C15.4136 60.0001 15.3231 60.2668 15.1781 60.5041L15.1823 60.4958C15.0594 60.7632 14.8791 61.0001 14.6543 61.1895C14.4296 61.3789 14.1659 61.5162 13.8821 61.5916L13.8697 61.5958C13.2737 61.7412 12.6451 61.6611 12.1043 61.3708L12.1168 61.3791C10.4117 60.5587 8.78256 59.5882 7.24845 58.4791L7.34398 58.5458C5.83161 57.468 4.44394 56.2242 3.20675 54.8374L3.18599 54.8124C2.43994 53.9402 1.79346 52.9871 1.2586 51.9708L1.21706 51.8874C0.705771 50.8897 0.340627 49.8231 0.132908 48.7208L0.120446 48.6499C-0.10459 47.2422 -0.00656521 45.8015 0.407062 44.4374L0.390446 44.5041C0.810338 43.1469 1.46561 41.8746 2.32614 40.7458L2.30537 40.7749C3.19983 39.5888 4.20922 38.5555 5.33352 37.6749L5.37091 37.6458C6.45506 36.7874 7.67214 36.0041 8.96398 35.3458L9.0886 35.2874C11.2813 34.0986 13.5715 33.1005 15.9341 32.3041L16.254 32.2083C18.6854 31.4027 21.1832 30.7083 23.7475 30.1249C23.9137 30.0666 24.1034 30.0138 24.3166 29.9666L24.3498 29.9624C24.5908 29.9124 24.7901 29.8541 24.9854 29.7874L24.948 29.7999C24.8012 29.1416 24.6794 28.4833 24.5824 27.8249C24.4855 27.1666 24.3941 26.5083 24.3083 25.8499C23.8733 23.1746 23.6014 20.4752 23.4941 17.7666L23.49 17.6208C23.3776 14.8171 23.707 12.0131 24.4661 9.31244L24.4204 9.49995C24.6572 8.31245 24.9978 7.26661 25.4423 6.27911L25.4049 6.37078C25.8562 5.35211 26.4507 4.40358 27.1703 3.55411L27.1578 3.57078C28.4246 2.02774 30.13 0.908586 32.0469 0.362446L32.1175 0.345779C34.107 -0.13406 36.1844 -0.108282 38.1614 0.420779L38.0741 0.399946C40.1659 0.901703 42.1652 1.73285 43.9975 2.86245L43.9103 2.81245C45.9083 4.04578 47.6031 5.24161 49.2231 6.52495L49.1068 6.43745C49.5221 6.82495 49.7921 7.36661 49.8337 7.96661V7.97495L49.8378 8.10828C49.8383 8.37156 49.7847 8.63212 49.6804 8.87371C49.576 9.11529 49.4232 9.33273 49.2314 9.51245C48.895 9.93518 48.4079 10.2101 47.8731 10.2791H47.8606C47.2929 10.349 46.7208 10.1901 46.2697 9.83745L46.2738 9.84161C45.3988 9.2555 44.5597 8.67078 43.7566 8.08745C42.9906 7.52525 42.1977 7.00101 41.3806 6.51661L41.2435 6.44161C40.3286 5.87287 39.3551 5.40488 38.34 5.04578L38.232 5.01245C37.1536 4.64626 36.0225 4.46044 34.884 4.46245H34.7801H34.7261C33.8164 4.46245 32.9566 4.68745 32.2006 5.07911L32.2297 5.06661C31.4487 5.48263 30.7921 6.09956 30.3272 6.85411L30.3148 6.87495C29.6033 7.78091 29.087 8.82516 28.7986 9.94161L28.7861 9.99995C28.497 11.091 28.2819 12.2005 28.1423 13.3208L28.1298 13.4583C27.8395 16.0048 27.8255 18.5754 28.0883 21.1249L28.0758 20.9749C28.3666 23.8416 28.7737 26.3666 29.3095 28.8458L29.2264 28.3833V28.4208C29.2269 28.5082 29.2469 28.5944 29.285 28.673C29.3231 28.7516 29.3783 28.8206 29.4466 28.8749C29.5906 28.9833 29.7623 29.0388 29.9617 29.0416H29.9949C32.0358 28.8222 34.0421 28.6208 36.0138 28.4374C37.9855 28.2541 39.9544 28.0888 41.9206 27.9416C42.307 27.8824 42.6832 27.7688 43.038 27.6041L43.0131 27.6124C43.3503 27.419 43.6455 27.1597 43.8812 26.8499L43.8854 26.8416C46.4319 23.5646 49.1452 20.4216 52.0145 17.4249L51.9812 17.4624C54.793 14.5405 57.8367 11.8525 61.0823 9.42495L61.2775 9.28328C63.0138 7.95151 64.8236 6.719 66.6983 5.59161L66.9683 5.44161C68.8991 4.28979 70.9657 3.38418 73.1201 2.74578L73.3154 2.69578C74.6672 2.26262 76.0687 2.00497 77.4858 1.92911H77.5274C79.0245 1.85979 80.5202 2.09214 81.9263 2.61245L81.8474 2.58745C83.5255 3.11661 84.9378 4.09161 85.9929 5.37078L86.0054 5.38745C87.0189 6.67495 87.8081 8.19578 88.2817 9.84995L88.3025 9.94161C88.8591 11.6124 89.1789 13.5374 89.1789 15.5333V15.5833C89.1789 17.5388 89.0626 19.4638 88.83 21.3583L88.8508 21.1333C88.7788 21.6444 88.7054 22.1319 88.6306 22.5958C88.5392 23.1708 88.4229 23.6624 88.2817 24.1458L88.3025 24.0583C88.275 24.332 88.1879 24.5964 88.0472 24.8326C87.9065 25.0688 87.7157 25.271 87.4883 25.4249L87.48 25.4291C87.0139 25.7534 86.441 25.8848 85.8808 25.7958H85.8932C85.6177 25.77 85.3502 25.6893 85.1062 25.5583C84.8622 25.4274 84.6468 25.2489 84.4726 25.0333L84.4684 25.0291C84.2826 24.7996 84.1476 24.533 84.0724 24.2471C83.9972 23.9611 83.9835 23.6624 84.0323 23.3708V23.3833C84.1043 22.5055 84.2137 21.6097 84.3605 20.6958C84.4975 19.8874 84.5764 18.9583 84.5806 18.0083C84.6522 16.9052 84.6508 15.7986 84.5765 14.6958L84.5806 14.7708C84.5033 13.6281 84.3479 12.4921 84.1154 11.3708L84.1445 11.5374C84.0231 10.638 83.708 9.77591 83.2209 9.01103C82.7338 8.24614 82.0865 7.59685 81.324 7.10828L81.2991 7.09161C79.5892 6.21902 77.6082 6.0472 75.7745 6.61245L75.8284 6.59995C74.1563 6.95705 72.5368 7.5284 71.01 8.29994L71.1221 8.24578C69.6628 8.97633 68.2048 9.7805 66.7481 10.6583C63.9055 12.5646 61.2242 14.7023 58.7312 17.0499L58.7603 17.0208C56.2818 19.3624 53.9114 21.8138 51.6489 24.3749C51.2114 24.8138 50.7738 25.2888 50.3363 25.7999C49.8988 26.3111 49.4972 26.7861 49.1317 27.2249V27.2416C49.1331 27.2954 49.1138 27.3477 49.0777 27.3874C49.0286 27.4701 49.0095 27.5673 49.0237 27.6624L50.2283 27.6583C56.4424 27.7374 62.4697 28.1749 68.3931 28.9499L67.6205 28.8666C74.1337 29.7124 79.9449 30.9791 85.5651 32.6916L84.7924 32.4874C87.9577 33.3749 90.5538 34.2916 93.0835 35.3499L92.6183 35.1749C95.5343 36.3791 98.0017 37.6499 100.344 39.0958L100.112 38.9624C101.458 39.8416 102.617 40.7083 103.722 41.6416L103.668 41.5958C104.814 42.5624 105.832 43.6083 106.754 44.7374L106.787 44.7791C108.424 46.7333 109.416 49.2749 109.416 52.0499L109.412 52.4208V52.4041C109.194 55.1539 107.946 57.7189 105.919 59.5833L105.911 59.5916C104.511 60.9986 102.927 62.2096 101.204 63.1916L101.096 63.2499C99.3938 64.2114 97.6189 65.0376 95.7877 65.7208L95.5177 65.8083C95.0055 65.9585 94.4564 65.9171 93.9725 65.6916L93.9849 65.6958C93.7308 65.584 93.5028 65.4203 93.3154 65.2151C93.128 65.0099 92.9854 64.7678 92.8966 64.5041L92.8925 64.4916C92.7802 64.2391 92.7225 63.9656 92.7233 63.6891C92.724 63.4126 92.7831 63.1394 92.8966 62.8874L92.8925 62.8999C93.1172 62.3469 93.5413 61.8991 94.0805 61.6458L94.0929 61.6416C94.968 61.2027 95.8611 60.7819 96.7721 60.3791C97.6849 59.9779 98.5641 59.5042 99.4015 58.9624L99.3268 59.0083C100.095 58.5458 100.756 58.0749 101.379 57.5583L101.35 57.5791C101.97 57.068 102.578 56.5194 103.173 55.9333C104.208 54.9333 104.893 53.5749 105.03 52.0624V52.0041C105.03 50.4874 104.498 49.0916 103.609 47.9999L103.618 48.0124C102.898 46.9964 102.047 46.0802 101.088 45.2874L101.063 45.2666C100.117 44.4838 99.1145 43.7722 98.064 43.1374L97.9477 43.0708C95.4404 41.4484 92.7751 40.0858 89.9931 39.0041L89.6857 38.8999C87.0158 37.8519 84.291 36.9506 81.5234 36.1999L80.8795 36.0499C77.742 35.2444 74.5892 34.5499 71.4212 33.9666C68.3474 33.3849 65.2417 32.9869 62.1208 32.7749L61.8508 32.7583C59.2975 32.6111 56.7263 32.4888 54.1371 32.3916C51.5478 32.2944 48.9766 32.2027 46.4234 32.1166H46.3818C46.0533 32.1185 45.7274 32.1763 45.4181 32.2874L45.4389 32.2791C45.152 32.3841 44.9177 32.5981 44.7868 32.8749L44.7826 32.8833L40.1261 39.8749C38.5948 42.2166 37.0994 44.5583 35.64 46.8999C35.4862 47.0648 35.39 47.2754 35.3658 47.4999V47.5041C35.3225 47.7465 35.3411 47.9959 35.4198 48.2291L35.4157 48.2166C36.7283 51.2166 38.0963 54.1791 39.5197 57.1041C40.9431 60.0291 42.4924 62.8999 44.1678 65.7166C45.8432 68.5333 47.6114 71.2763 49.4723 73.9458C51.3332 76.6152 53.3201 79.193 55.4331 81.6791C57.294 83.8416 59.1715 85.8083 61.1404 87.6791L61.1778 87.7124C63.1094 89.5499 65.2361 91.2124 67.5166 92.6583L67.6869 92.7583C68.6755 93.4291 69.8095 94.0541 70.9975 94.5708L71.1346 94.6249C72.2437 95.1124 73.5314 95.4249 74.8814 95.4999H74.9105C76.0397 95.5985 77.1731 95.3639 78.1712 94.8249L78.1421 94.8416C79.0892 94.2874 79.8535 93.5041 80.3686 92.5666L80.3852 92.5374C80.9294 91.6708 81.3614 90.6624 81.6272 89.5916L81.6438 89.5208C81.8981 88.4672 82.0937 87.4003 82.2295 86.3249L82.2461 86.1749C82.5463 82.5555 82.3872 78.9125 81.7726 75.3333L81.81 75.5874C81.2257 72.1124 80.496 68.6569 79.6209 65.2208C78.5991 61.7097 77.4318 58.2722 76.1192 54.9083C74.8066 51.5444 73.3846 48.2138 71.8532 44.9166C71.6996 44.6669 71.5794 44.3979 71.496 44.1166L71.4877 44.0916C71.3764 43.8278 71.3588 43.5336 71.4378 43.2583V43.2416C71.4378 42.7333 71.6455 42.2749 71.9861 41.9499C72.3345 41.5915 72.792 41.3599 73.2863 41.2916H73.2988C73.7531 41.2172 74.2192 41.2964 74.6238 41.5166L74.6114 41.5124C75.058 41.7428 75.4062 42.1277 75.5917 42.5958L75.5958 42.6083C76.1054 43.7777 76.6523 44.9666 77.2366 46.1749C77.8209 47.3833 78.3678 48.6027 78.8774 49.8333C80.4088 53.5638 81.7948 57.3666 83.0354 61.2416C84.1361 64.5249 85.1248 68.5124 85.8143 72.6083L85.8808 73.0916C86.2754 75.4874 86.5869 78.4124 86.7448 81.3833L86.7531 81.5999C86.8978 84.5294 86.625 87.4645 85.9431 90.3166L85.9846 90.1083C85.8378 90.6944 85.6551 91.3041 85.4363 91.9374C85.2079 92.594 84.9388 93.2355 84.6305 93.8583L84.672 93.7666C83.7041 96.0374 82.0218 97.8499 79.9158 98.9499L79.8577 98.9791C78.5326 99.6333 76.9749 100.021 75.33 100.021C74.4106 100.018 73.5258 99.9041 72.6757 99.6791L72.7463 99.6958C70.5448 99.2374 68.5925 98.4583 66.8271 97.3999L66.9143 97.4499C65.0712 96.3503 63.3007 95.1325 61.614 93.8041L61.7178 93.8833C58.6922 91.5006 55.893 88.8421 53.3561 85.9416L53.2938 85.8708C50.7406 82.9458 48.3341 79.911 46.0744 76.7666C43.6456 73.3678 41.4006 69.8405 39.3494 66.1999L39.0337 65.5958C36.882 61.7541 34.8951 57.7861 33.0729 53.6916L32.8528 53.2541L32.4789 52.6208ZM30.294 33.3041L33.0272 42.3041C34.1211 40.5486 35.1969 38.8652 36.2548 37.2541C37.3126 35.643 38.4244 33.9972 39.5903 32.3166L30.294 33.3041ZM55.1215 56.3499H55.0468C53.3021 56.3499 51.7195 55.6374 50.5814 54.4833C50.0079 53.9517 49.5504 53.3066 49.238 52.5887C48.9256 51.8708 48.7649 51.0957 48.7661 50.3124L48.7744 49.9666V49.8874C48.7744 48.1583 49.4889 46.5999 50.6354 45.4833C51.2049 44.8926 51.8872 44.4229 52.6415 44.1022C53.3958 43.7815 54.2067 43.6164 55.026 43.6166H55.1257H55.1963C56.9409 43.6166 58.5235 44.3291 59.6617 45.4833C60.8414 46.5874 61.5766 48.1583 61.5766 49.9041V49.9874V50.0624C61.5766 51.8041 60.8414 53.3749 59.6658 54.4791L59.6617 54.4833C59.079 55.0773 58.3838 55.5485 57.617 55.8691C56.8501 56.1896 56.0271 56.3531 55.1963 56.3499H55.134H55.1381H55.1215Z" />
                </g>
                <defs>
                <filter id="filter0_d_4_32" x="0.00256348" y="0.0039978" width="113.414" height="104.017" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_32"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_32" result="shape"/>
                </filter>
                </defs>
            </svg>
        </main>
    )
}