{\rtf1\ansi\ansicpg936\cocoartf1671\cocoasubrtf400
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 (function(ext) \{\
	ext._shutdown = function() \{\};\
	\
	ext._getStatus = function() \{\
		return \{status: 2, msg: 'Ready'\};\
	\};\
\
	ext. ukMapX = function() \{\
		return 2\
	\};\
\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 	ext. ukMapY = function() \{\
		return 2\
	\};\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 \
	var descriptor = \{\
		blocks: [\
			['r', 'ukMapX', 'ukMapX'],\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 			['r', 'ukMapY', 'ukMapY']\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 		],\
		displayName: 'map'\
	\}\
\
	ScratchExtensions.register('map', descriptor, ext);\
\
\})(\{\});}