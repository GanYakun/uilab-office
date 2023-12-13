/*
 * @Author: lx.jin 308561217@qq.com
 * @Date: 2023-11-23 10:51:23
 * @LastEditors: lx.jin 308561217@qq.com
 * @LastEditTime: 2023-12-12 13:41:51
 * @FilePath: /Uilab-Application/config/appConfig.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description: 应用配置
 */
const appConfig = {
	//应用名称
	title: 'dinstitute',
	subTitle: 'v0.1',
	logo: '/try8.svg',
	//Fe应用
	feApps: [
		//多维数据查询
		{
			path: 'multidimensionalDataQuery',
			name: 'multidimensionalDataQuery',
			icon: 'ApartmentOutlined',
			apps: [
				// {
				// 	appName: 'dx-query',
				// 	access: 'canSystem',
				// },
			],
		},
		//智慧档案室
		{
			path: 'SmartArchiveRoom',
			name: 'SmartArchiveRoom',
			icon: 'ApartmentOutlined',
			apps: [
				{
					appName: 'project-query',
					access: 'canSystem',
				},
				{
					appName: 'skbgwordcontent-query',
					access: 'canSystem',
				},
				{
					appName: 'file-view',
					access: 'canSystem',
				},
			],
		},
		//项目分配-管理
		{
			path: 'AllocationOfItems',
			name: 'AllocationOfItems',
			icon: 'ApartmentOutlined',
			apps: [
				{
					appName: 'jx-query',
					access: 'canSystem',
				},
				{
					appName: 'dx-query',
					access: 'canSystem',
				},
			],
		},
	],
	//自定义应用
	custApps: [
		{
			"path": "/multidimensionalDataQuery",
			"name": "multidimensionalDataQuery",
			"icon": "smile",
			"routes": [
				{
					"name": "dx-query",
					"path": "/multidimensionalDataQuery/dx-query",
					"routes": [
						{
							"path": "/multidimensionalDataQuery/dx-query",
							"redirect": "/multidimensionalDataQuery/dx-query/SupplierPartiesList"
						},
					]
				},
			]
		}
	],
	//国际化配置
	appLocales: {
		'en-US': {
			'menu.login': 'Login',
			'menu.launchPad': 'LaunchPad',
			'menu.account.logout': 'logout',
			//用户与权限
			'menu.user&permission': 'User&Permission',
			'menu.user&permission.custom-department-manage': 'Users',
			'menu.user&permission.role-manage': 'Roles',
			'menu.user&permission.uilab-app-manage': 'Permission',
			//审批管理
			'menu.approvel': 'Approval',
			'menu.approvel.approval-manage': 'Approval',
			//供应商管理
			'menu.supplier': 'Vendors',
			'menu.supplier.supplierparty-manage': 'Registered Vendors',
			'menu.supplier.supplierapprove-managebyapplication': 'Vendor On-boarding Applicant',
			'menu.supplier.supplierapprove-managebycompliance': 'Vendor Check-up',
			'menu.supplier.supplierapprove-managebyprocurement': 'Vendor On-boarding Procurement',
			'menu.supplier.supplier-dd-form': 'Due Diligence Form',
			//流程管理
			'menu.workflow': 'WorkFlow',
			'menu.workflow.custom-workflow-manage': 'WorkFlow',
			//对象管理
			'menu.object': 'Object',
			'menu.object.custom-entitytype-manage': 'System Object',
			'menu.object.process-entity-manage': 'Custom Object',
			'menu.object.customer-process-entity-manage': 'Ofbiz Entity',
		},
		'zh-CN': {
			'menu.login': '登录',
			'menu.launchPad': '应用磁贴',
			'menu.account.logout': '登出',
			//多维数据查询
			'menu.multidimensionalDataQuery': '多维数据查询',
			'menu.multidimensionalDataQuery.dx-query': '例子',
			//智慧档案室
			'menu.SmartArchiveRoom': '智慧档案室',
			'menu.SmartArchiveRoom.project-query': '估算书文档-查询',
			'menu.SmartArchiveRoom.skbgwordcontent-query': '可研文档-查询',
			'menu.SmartArchiveRoom.file-view': '文件归档-下载',
			//项目分配-管理
			'menu.AllocationOfItems': '项目分配-管理',
			'menu.AllocationOfItems.jx-query': '检修/运维-管理',
			'menu.AllocationOfItems.dx-query': '技改/大修-管理',
		}
	},
	locale: {
		default: 'zh-CN',//en-US,zh-CN,zh-TW
		antd: true,
		baseNavigator: true,
	},
	//服务配置
	ServiceName: 'dinstitute',
	// loginName: 'externalLogin',
	fetchUserInfo: {
		parameters: {
			/* 	$expand: {
					UILabApp: {},
					PartyRole: {},
					Person: {},
					RoleTypeSecurityPermission: {
						$expand: {
							SecurityPermission: {}
						}
					}
				}, */
		},
	},
	//开发代理
	proxy: {
		dev: {
			'/dinstitute/': {
				target: 'http://dinstitute.dinstitute.banff-tech.com',
				changeOrigin: true,
				pathRewrite: {
					'^': '',
				},
				secure: false, //配置关闭证书签名验证
			},
			'/odata/': {
				target: 'http://dinstitute.dinstitute.banff-tech.com',
				//target: 'http://192.168.50.132:8080',
				changeOrigin: true,
				pathRewrite: {
					'^': '',
				},
				secure: false, //配置关闭证书签名验证
			},
			'/ai/': {
				target: 'http://192.168.50.186:8089',
				changeOrigin: true,
				pathRewrite: {
					'^': '',
				},
				secure: false, //配置关闭证书签名验证
			},
		},
	}
}

//权限配置
const getSecurityPermissionGroup = (currentUser) => {
	let SecurityPermissionGroup = {
		canSystem: true,//平台管理员使用
	}
	if (currentUser && currentUser.UILabApp) {
		SecurityPermissionGroup = {
			...SecurityPermissionGroup,
			canAdmin: currentUser.userLoginId === 'admin',
			can00: currentUser.UILabApp.findIndex((item) => item.permissionId === '00') !== -1,//审批
			can001: currentUser.UILabApp.findIndex((item) => item.permissionId === '00' || item.permissionId === '01' || item.permissionId === '02' || item.permissionId === '03') !== -1,//vondors-approved
			can01: currentUser.UILabApp.findIndex((item) => item.permissionId === '01') !== -1,//Applicant
			can02: currentUser.UILabApp.findIndex((item) => item.permissionId === '02') !== -1,//Compliance
			can03: currentUser.UILabApp.findIndex((item) => item.permissionId === '03') !== -1,//procurement
			can04: currentUser.UILabApp.findIndex((item) => item.permissionId === '04') !== -1,//vondors
		}
	}

	console.log({ currentUser, SecurityPermissionGroup })

	return SecurityPermissionGroup
}

/**
 * 获取当前路由文件
 */
const getRouteFiles = () => {
	const result = []
	if (Array.isArray(appConfig.feApps)) {
		for (let group of appConfig.feApps) {
			const { path: groupPath, name: groupName, icon, apps } = group
			const groupArr = []
			for (let item of apps) {
				const { appName, access, ListReport, ObjectPage } = item
				const manifest = require(`../public/Ui5/${appName}/webapp/manifest.json`)
				const { routes, targets } = manifest['sap.ui5'].routing
				const routeArr = []
				for (let route of routes) {
					const { name } = route
					if (targets[name]?.name === 'sap.fe.templates.ListReport') {
						routeArr.push({
							path: `/${groupPath}/${appName}`,
							redirect: `/${groupPath}/${appName}/${name}`,
							access,
							ListReport,
							ObjectPage
						})
						routeArr.push({
							path: `/${groupPath}/${appName}/${name}`,
							component: `../../lib/Uilab-Comp/smart-comp/UIPages/ListReport`,
							hideInMenu: true,
							access,
							ListReport,
							ObjectPage
						})
					} else if (targets[name]?.name === 'sap.fe.templates.ObjectPage') {
						routeArr.push({
							path: `/${groupPath}/${appName}/${name}`,
							component: '../../lib/Uilab-Comp/smart-comp/UIPages/ObjectPage',
							hideInMenu: true,
							access,
							ListReport,
							ObjectPage
						})
					}
				}
				groupArr.push({
					name: `${appName}`,
					path: `/${groupPath}/${appName}`,
					routes: routeArr
				})
			}
			result.push(
				{
					path: `/${groupPath}`,
					name: groupName,
					icon: icon,
					routes: groupArr,
				},
			)
		}
	}
	if (Array.isArray(appConfig.custApps)) {
		result.forEach((item, index) => {
			for (let group of appConfig.custApps) {
				const { path: groupPath, routes, access } = group
				if (groupPath.includes(item.path)) {
					routes.forEach((childItem) => {
						const { path, name, routes: chidRouter } = childItem
						result[index].routes.push({
							path: `${path}`,
							name: name,
							routes: chidRouter,
							access
						})
					})
				}
			}
		})
	}
	return result
}

export {
	appConfig,
	getSecurityPermissionGroup,
	getRouteFiles
}
